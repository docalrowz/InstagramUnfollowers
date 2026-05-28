import { InstagramError } from '../core/error-types';

export interface ErrorState {
  readonly status: 'error';
  readonly error: InstagramError;
  readonly recoverable: boolean;
  readonly previousStatus: 'scanning' | 'unfollowing';
}

export function isErrorRecoverable(error: InstagramError): boolean {
  switch (error.kind) {
    case 'rate_limit':
    case 'network':
    case 'csrf_expired':
      return true;
    case 'checkpoint':
    case 'unknown':
      return false;
  }
}
