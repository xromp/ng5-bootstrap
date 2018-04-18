import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SidebarComponent } from '../app/modules/base/sidebar/sidebar.component';
import { NavbarComponent } from '../app/modules/base/navbar/navbar.component';
import { FooterComponent } from '../app/modules/base/footer/footer.component';
import { GenerateComponent } from './generate/generate.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    GenerateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
