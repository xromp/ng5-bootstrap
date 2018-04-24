import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Data } from '@angular/router';

import { LoadingIndicatorService } from '../../../helpers/RequestLoaderHelper';

declare var $:any;

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  private people;
  page = {
    size:10,
    currentPage:1,
    totalItems:100
  };
  display:any = {};

  constructor(private _profileService:ProfileService, private _loadingIndicator:LoadingIndicatorService) { 
    _loadingIndicator
    .onLoadingChanged
    .subscribe(isLoading => this.display.loading = isLoading);

  }
  

  ngOnInit() {
    this.pageChanged(1);
  }

  // getPeople() {
    
  // }
  ngAfterViewInit(){
    $('.pagination').on('click', function (e) {
      var $loading = $(this).parents('.table-people').waitMe({
          effect: 'timer',
          text: 'Loading...',
          bg: 'rgba(255,255,255,0.90)',
          color: '#555'
      });
      // if($(".pagination").attr("loadingState") == false){
      //   console.log("eye");
      //   $loading.waitMe('hide');
      // };
    });

    // var loader = function (){
    //   var $loading = $(this).parents('.table-people').waitMe({
    //     effect: 'timer',
    //     text: 'Loading...',
    //     bg: 'rgba(255,255,255,0.90)',
    //     color: '#555'
    //   });
    // }

    // loader();
  }

  pageChanged(e) {
    // this.showLoader();
    this.page.currentPage=e;

    var data = {
      page : this.page
    };

    this._profileService.getPeople(data).subscribe(
      response => { 
        this.page.totalItems = response.total;
        this.people = response.data;
      },
      err => console.error(err),
      () => {
        console.log('done loading people')
        this.display.loading = false;
        console.log(this.display);
      }
    )

  }

  
}
