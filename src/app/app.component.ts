import { Component, AfterViewInit, OnInit } from '@angular/core';
import { DOMHelper } from '../app/helpers/DOMHelper';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends DOMHelper implements OnInit{
  title = 'app';

  constructor(){
    super();
  }
  
}
