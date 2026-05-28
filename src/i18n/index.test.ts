import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { dictionaries, getDictionary, loadLocale, saveLocale } from './index';

describe('i18n locale resolution', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('honours an explicit choice persisted in localStorage', () => {
    localStorage.setItem('iu_locale', 'fr');
    expect(loadLocale()).toBe('fr');
  });

  it('falls back to navigator.language when storage is empty', () => {
    vi.spyOn(globalThis.navigator, 'languages', 'get').mockReturnValue([]);
    vi.spyOn(globalThis.navigator, 'language', 'get').mockReturnValue('fr-FR');
    expect(loadLocale()).toBe('fr');
  });

  it('defaults to English when navigator advertises an unsupported locale', () => {
    vi.spyOn(globalThis.navigator, 'languages', 'get').mockReturnValue([]);
    vi.spyOn(globalThis.navigator, 'language', 'get').mockReturnValue('zh-CN');
    expect(loadLocale()).toBe('en');
  });

  it('detects each supported locale from navigator', () => {
    const cases: Array<[string, 'en' | 'fr' | 'es' | 'pt' | 'de' | 'ja']> = [
      ['en-US', 'en'],
      ['fr-FR', 'fr'],
      ['es-ES', 'es'],
      ['pt-BR', 'pt'],
      ['de-DE', 'de'],
      ['ja-JP', 'ja'],
    ];
    for (const [advertised, expected] of cases) {
      localStorage.clear();
      vi.spyOn(globalThis.navigator, 'languages', 'get').mockReturnValue([]);
      vi.spyOn(globalThis.navigator, 'language', 'get').mockReturnValue(advertised);
      expect(loadLocale()).toBe(expected);
    }
  });

  it('ignores invalid locale strings written by hand into storage', () => {
    localStorage.setItem('iu_locale', 'klingon');
    vi.spyOn(globalThis.navigator, 'languages', 'get').mockReturnValue([]);
    vi.spyOn(globalThis.navigator, 'language', 'get').mockReturnValue('en-US');
    expect(loadLocale()).toBe('en');
  });

  it('saveLocale round-trips through loadLocale', () => {
    saveLocale('fr');
    expect(loadLocale()).toBe('fr');
  });

  it('returns matching dictionary for every supported locale', () => {
    expect(getDictionary('en').landing.headline).toBe(dictionaries.en.landing.headline);
    expect(getDictionary('fr').landing.headline).toBe(dictionaries.fr.landing.headline);
  });
});

describe('i18n dictionary parity', () => {
  const flatten = (obj: object, prefix = ''): string[] =>
    Object.entries(obj).flatMap(([key, value]) => {
      const path = prefix === '' ? key : `${prefix}.${key}`;
      return typeof value === 'object' && value !== null
        ? flatten(value as object, path)
        : [path];
    });

  it('every locale exposes the same key set as English', () => {
    const enKeys = flatten(dictionaries.en).sort();
    for (const locale of Object.keys(dictionaries) as Array<keyof typeof dictionaries>) {
      const keys = flatten(dictionaries[locale]).sort();
      expect(keys, `locale=${locale}`).toEqual(enKeys);
    }
  });
});
