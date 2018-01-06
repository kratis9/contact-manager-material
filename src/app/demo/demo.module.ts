import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'buttons', component: ButtonsComponent },
  { path: '**', redirectTo: 'demo' }
];

@NgModule({
  imports: [
    CommonModule,
    DemoRoutingModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule
  ],
  declarations: [ButtonsComponent]
})
export class DemoModule { }
