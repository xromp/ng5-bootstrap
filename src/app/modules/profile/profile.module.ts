import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ProfileRoutingModule } from './profile-routing.module';
import { ViewComponent } from './view/view.component';

// Third party modules
import { NgxPaginationModule } from 'ngx-pagination';
import { LoadingIndicatorService, LoadingIndicatorInterceptor } from '../../helpers/RequestLoaderHelper';


import { ProfileService } from './profile.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ProfileRoutingModule,
    NgxPaginationModule
  ],
  declarations: [ViewComponent],
  providers:[ProfileService, HttpClientModule,
    LoadingIndicatorService,
    {
      provide: HTTP_INTERCEPTORS,
      useFactory: (service: LoadingIndicatorService) => new LoadingIndicatorInterceptor(service),
      multi: true,
      deps: [LoadingIndicatorService]
    }
  ]
})
export class ProfileModule { }
