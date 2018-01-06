import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { FlexboxComponent } from './flexbox/flexbox.component';

const routes: Routes = [
  { path: 'buttons', component: ButtonsComponent },
  { path: 'flexbox', component: FlexboxComponent },
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
  declarations: [ButtonsComponent, FlexboxComponent]
})
export class DemoModule { }
