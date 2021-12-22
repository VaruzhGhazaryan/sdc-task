// Angular modules.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Angular Material modules.
import { MatSortModule } from "@angular/material/sort";
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from "@angular/material/table";
import { MatFormFieldModule } from '@angular/material/form-field';

// Feature specific modules.
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { ListViewComponent } from './list-view/list-view.component';
import { FiltersComponent } from './filters/filters.component';

@NgModule({
  declarations: [
    UsersComponent,
    ListViewComponent,
    FiltersComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsersRoutingModule,
    MatSortModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class UsersModule { }
