import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { ProfileRoutingModule } from './profile-routing.module';
import { ViewComponent } from './view/view.component';

// Third party modules
import { NgxPaginationModule } from 'ngx-pagination';

import { ProfileService } from './profile.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ProfileRoutingModule,
    NgxPaginationModule
  ],
  declarations: [ViewComponent],
  providers:[ProfileService, HttpClientModule]
})
export class ProfileModule { }
