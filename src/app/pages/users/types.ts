import { U2ULink, User } from '@app/types';
import { EntityState } from '@ngrx/entity';

export enum CallState {
  Init = 'INIT',
  Loading = 'LOADING',
  Loaded = 'LOADED',
  Error = 'ERROR'
}

export interface UserState {
  callState: CallState;
  links: U2ULink[];
  users: EntityState<User>
}

export interface FilterEvent {
  filter: string;
}
