import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})

export class ViewComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    // this.loadScript();
    
  }
 
  ngAfterInit(){
    // require("../../../../../node_modules/adminbsb-materialdesign/plugins/jquery/jquery.min.js");
    // require("../../../../../node_modules/adminbsb-materialdesign/plugins/node-waves/waves.js");
    // require("../../../../../node_modules/adminbsb-materialdesign/js/admin.js");
    // require("../../../../../node_modules/adminbsb-materialdesign/js/pages/index.js");
    // require("../../../../../node_modules/adminbsb-materialdesign/js/demo.js");
  }

}
