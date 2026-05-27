import { UserNode } from '../model/user';
import { Timings } from '../model/timings';
import { WHITELISTED_RESULTS_STORAGE_KEY, TIMINGS_STORAGE_KEY } from '../constants/constants';

/**
 * Export whitelist to a JSON file. No-op when the list is empty —
 * caller is responsible for guarding the UI.
 */
export const exportWhitelist = (whitelistedUsers: readonly UserNode[]): void => {
  if (whitelistedUsers.length === 0) {
    return;
  }

  const dataStr = JSON.stringify(whitelistedUsers, null, 2);
  const dataBlob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(dataBlob);

  const link = document.createElement('a');
  link.href = url;
  link.download = `instagram-whitelist-${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
};

/**
 * Import whitelist from a JSON file
 */
export const importWhitelist = (
  file: File,
  onSuccess: (users: readonly UserNode[]) => void,
  onError: (message: string) => void,
): void => {
  const reader = new FileReader();

  reader.onload = e => {
    try {
      const content = e.target?.result as string;
      const parsed: unknown = JSON.parse(content);
      if (!Array.isArray(parsed)) {
        onError('Invalid file format: Expected an array of users');
        return;
      }
      const validated = parsed.filter(isWhitelistUserShape);
      if (validated.length !== parsed.length) {
        onError(`Invalid file format: ${parsed.length - validated.length} entries missing required fields (id, username)`);
        return;
      }
      onSuccess(validated);
    } catch (error) {
      onError(`Failed to parse JSON file: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  reader.onerror = () => {
    onError('Failed to read file');
  };

  reader.readAsText(file);
};

/**
 * Clear all whitelist data. Pure side-effect — caller must obtain
 * user confirmation (e.g. via useConfirm) before invoking.
 */
export const clearWhitelist = (): void => {
  try {
    localStorage.removeItem(WHITELISTED_RESULTS_STORAGE_KEY);
  } catch (e) {
    console.warn('Failed to clear whitelist from localStorage', e);
  }
};

/**
 * Load whitelist from localStorage. Returns an empty array on any
 * failure (missing key, parse error, schema mismatch, localStorage
 * disabled). Corrupt entries are dropped silently — better to lose
 * a stale row than to crash the whole UI.
 */
export const loadWhitelist = (): readonly UserNode[] => {
  let raw: string | null;
  try {
    raw = localStorage.getItem(WHITELISTED_RESULTS_STORAGE_KEY);
  } catch (e) {
    console.warn('Failed to read whitelist from localStorage', e);
    return [];
  }
  if (raw === null) {
    return [];
  }
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch (e) {
    console.warn('Whitelist in localStorage is not valid JSON; ignoring', e);
    return [];
  }
  if (!Array.isArray(parsed)) {
    return [];
  }
  const validated = parsed.filter(isWhitelistUserShape);
  if (validated.length !== parsed.length) {
    console.warn(`Dropped ${parsed.length - validated.length} malformed whitelist entries`);
  }
  return validated;
};

/**
 * Save whitelist to localStorage. Catches QuotaExceededError and
 * SecurityError (private browsing in some browsers blocks
 * localStorage writes) so the calling React effect does not crash.
 */
export const saveWhitelist = (whitelistedUsers: readonly UserNode[]): void => {
  try {
    localStorage.setItem(WHITELISTED_RESULTS_STORAGE_KEY, JSON.stringify(whitelistedUsers));
  } catch (e) {
    console.warn('Failed to save whitelist to localStorage', e);
  }
};

/**
 * Merge imported whitelist with existing whitelist (avoiding duplicates)
 */
export const mergeWhitelists = (
  existing: readonly UserNode[],
  imported: readonly UserNode[],
): readonly UserNode[] => {
  const existingIds = new Set(existing.map(user => user.id));
  const uniqueImported = imported.filter(user => !existingIds.has(user.id));
  return [...existing, ...uniqueImported];
};

const isTimings = (value: unknown): value is Timings => {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    return false;
  }

  return Object.values(value).every(timing => typeof timing === 'number');
};

/**
 * Load timings from localStorage
 */
export const loadTimings = (): Timings | null => {
  let raw: string | null;
  try {
    raw = localStorage.getItem(TIMINGS_STORAGE_KEY);
  } catch (e) {
    console.warn('Failed to read timings from localStorage', e);
    return null;
  }
  if (raw === null) {
    return null;
  }
  try {
    const parsedTimings: unknown = JSON.parse(raw);
    return isTimings(parsedTimings) ? parsedTimings : null;
  } catch {
    return null;
  }
};

/**
 * Save timings to localStorage
 */
export const saveTimings = (timings: Timings): void => {
  try {
    localStorage.setItem(TIMINGS_STORAGE_KEY, JSON.stringify(timings));
  } catch (e) {
    console.warn('Failed to save timings to localStorage', e);
  }
};

/**
 * Minimum-fields whitelist user guard. We only need `id` and
 * `username` from a whitelisted row at runtime; the rest of `UserNode`
 * is best-effort. Drop any row missing either.
 */
function isWhitelistUserShape(value: unknown): value is UserNode {
  if (typeof value !== 'object' || value === null) {
    return false;
  }
  const obj = value as Record<string, unknown>;
  return typeof obj.id === 'string' && typeof obj.username === 'string';
}
