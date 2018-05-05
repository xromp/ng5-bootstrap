import { Component, AfterViewInit, OnInit } from '@angular/core';
import { DOMHelper } from '../app/helpers/DOMHelper';
import { Router, NavigationStart, NavigationEnd, Event as NavigationEvent } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private router:Router){
    router.events.forEach((event: NavigationEvent) => {
      this.loadScript();
      // Handle route change
    });
  }
  public loadScript() {
    console.log('preparing to load...')
    let node = document.createElement('script');
    node.src = 'scripts.bundle.js';
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
}


  onInit(){
    console.log("route changes");
  }
  
}
