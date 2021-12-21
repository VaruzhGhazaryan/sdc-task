import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { CallState, UserState } from './types';
import { createEntityAdapter } from '@ngrx/entity';
import { User, UserDataMappedResult } from '@app/types';
import { filter, mergeMapTo, tap } from "rxjs";
import { UserService } from "@app/services/user.service";

const UserEntityAdapter = createEntityAdapter<User>({
  selectId: model => model.userId!,
  sortComparer: false
});

const UserEntitySelectors = UserEntityAdapter.getSelectors();

const initialState: UserState = {
  callState: CallState.Init,
  links: [],
  users: UserEntityAdapter.getInitialState()
}

@Injectable()
export class UsersStoreService extends ComponentStore<UserState> {
  constructor(private userService: UserService) {
    super(initialState);
  }

  /**
   * Selectors
   */
  readonly callState$ = this.select(state => state.callState);
  readonly loading$ = this.callState$.pipe(filter(cs => cs === CallState.Loading));
  readonly loaded$ = this.callState$.pipe(filter(cs => cs === CallState.Loaded));
  readonly error$ = this.callState$.pipe(filter(cs => cs === CallState.Error));
  readonly links$ = this.select(state => state.links);

  readonly userList$ = this.select(state => UserEntitySelectors.selectAll(state.users))
  readonly usersCount$ = this.select(state => UserEntitySelectors.selectTotal(state.users))
  readonly userEntities$ = this.select(state => UserEntitySelectors.selectEntities(state.users))

  /**
   * Updaters
   */
  private readonly setCallState = this.updater<CallState>((state, cs) => ({
    ...state,
    callState: cs
  }))

  private readonly setData = this.updater<UserDataMappedResult>((state, result) => ({
    ...state,
    links: result.links,
    users: UserEntityAdapter.setAll(result.users, state.users),
    callState: CallState.Loaded
  }))

  /**
   * Effects
   */
  readonly load = this.effect<void>(($origin) => $origin.pipe(
    tap(() => this.setCallState(CallState.Loading)),
    mergeMapTo(this.userService.getMappedUserData().pipe(
      tapResponse(
        result => {
          if (result && result.users && result.links) {
            this.setData(result);
          } else {
            this.setCallState(CallState.Loaded)
          }
        },
        error => this.setCallState(CallState.Error)
      )
    ))
  ))
}
