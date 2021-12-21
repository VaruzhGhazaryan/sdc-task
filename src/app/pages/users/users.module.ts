// Angular modules.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material modules.
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";

// Feature specific modules.
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { ListViewComponent } from './list-view/list-view.component';

@NgModule({
  declarations: [
    UsersComponent,
    ListViewComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatSortModule,
    MatTableModule,
  ]
})
export class UsersModule { }
