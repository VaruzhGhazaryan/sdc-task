import { Component, OnInit } from '@angular/core';
import { UsersStoreService } from "./users.store.service";

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

  constructor(private store: UsersStoreService) { }

  ngOnInit(): void {
    this.load()
  }

  load() {
    this.store.load();
  }

}
