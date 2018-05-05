import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'dashboard', loadChildren: './modules/dashboard/dashboard.module#DashboardModule'},
  {path:'profile', loadChildren: './modules/profile/profile.module#ProfileModule'},
  {path:'test', loadChildren: './modules/test/test.module#TestModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
