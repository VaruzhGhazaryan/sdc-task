import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { ListViewComponent } from './list-view/list-view.component';
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";


@NgModule({
  declarations: [
    UsersComponent,
    ListViewComponent
  ],
  imports: [
    CommonModule,
    MatSortModule,
    MatTableModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
