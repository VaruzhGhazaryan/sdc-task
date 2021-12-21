import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { CallState, UserState } from './types';
import { createEntityAdapter } from '@ngrx/entity';
import { User } from '@app/types';

const UserEntityAdapter = createEntityAdapter<User>({
  selectId: model => model.userId!,
  sortComparer: false
});

const initialState: UserState = {
  callState: CallState.Init,
  links: [],
  users: UserEntityAdapter.getInitialState()
}

@Injectable({
  providedIn: 'root'
})
export class UsersStoreService extends ComponentStore<UserState> {
  constructor() {
    super(initialState);
  }
}
