import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SidebarComponent } from '../app/modules/base/sidebar/sidebar.component';
import { NavbarComponent } from '../app/modules/base/navbar/navbar.component';
import { FooterComponent } from '../app/modules/base/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
