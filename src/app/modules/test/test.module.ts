import { NgModule, Directive, ElementRef, Renderer } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TestRoutingModule } from './test-routing.module';
import { TestListComponent, 
  TestFormComponent, 
  TestComponent, 
  NgForGroupExampleComponent, 
  ChangeColorDirective,
  AsyncExampleComponent,
  NgForExampleComponent } from './test-list/test-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TestRoutingModule
  ],
  declarations: [TestListComponent, 
    TestFormComponent, 
    TestComponent, 
    NgForGroupExampleComponent, 
    ChangeColorDirective,
    AsyncExampleComponent,
    NgForExampleComponent]
})
export class TestModule { }
