import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseRoutingModule } from './base-routing.module';
<<<<<<< HEAD
=======
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
>>>>>>> 6e46c7cb6eda4f5ed3ca47b0875065d33500799d

@NgModule({
  imports: [
    CommonModule,
    BaseRoutingModule
  ],
<<<<<<< HEAD
  declarations: []
=======
  declarations: [NavbarComponent, SidebarComponent, FooterComponent]
>>>>>>> 6e46c7cb6eda4f5ed3ca47b0875065d33500799d
})
export class BaseModule { }
