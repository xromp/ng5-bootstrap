import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {TestListComponent, NgForExampleComponent } from './test-list/test-list.component';
const routes: Routes = [
  { path:'', component:TestListComponent},
  { path:'forms', component:NgForExampleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }



