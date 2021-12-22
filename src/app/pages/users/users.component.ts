import { Component, OnInit } from '@angular/core';
import { UsersStoreService } from "./users.store.service";
import { BehaviorSubject, filter, withLatestFrom } from 'rxjs';
import { FilterEvent } from '@app/pages/users/types';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [ UsersStoreService ]
})
export class UsersComponent implements OnInit {
  links$ = this.store.links$;
  usersCount$ = this.store.usersCount$
  userEntities$ = this.store.userEntities$;

  error$ = this.store.error$;
  loaded$ = this.store.loaded$;
  loading$ = this.store.loading$;

  filters$ = new BehaviorSubject<FilterEvent>({ filter: '' });

  constructor(private store: UsersStoreService) { }

  ngOnInit(): void {
    this.load()
  }

  load() {
    this.store.load();
  }

  applyFilterChanges(event: FilterEvent) {
    this.filters$.next(event)
  }

}
