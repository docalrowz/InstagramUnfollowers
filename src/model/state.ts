import { ScanningState } from './scanning-state';
import { UnfollowingState } from './unfollowing-state';
import { ErrorState } from './error-state';

export interface InitialState {
  readonly status: 'initial';
}

export type State =
  | InitialState
  | ScanningState
  | UnfollowingState
  | ErrorState;

export type { ScanningState, UnfollowingState, ErrorState };
export { isErrorRecoverable } from './error-state';
