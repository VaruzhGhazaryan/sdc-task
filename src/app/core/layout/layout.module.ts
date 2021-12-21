// Angular modules.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material modules.
import { MatToolbarModule } from '@angular/material/toolbar';

// Module specific modules.
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  exports: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule
  ]
})
export class LayoutModule { }
