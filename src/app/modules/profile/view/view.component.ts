import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Data } from '@angular/router';

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
  private display= { loading:false};

  constructor(private _profileService:ProfileService) { }
  
  ngOnInit() {
    this.pageChanged(1);
  }

  // getPeople() {
    
  // }

  ngAfterViewInit(){
    $('[data-toggle="cardloading"]').on('click', function () {
      var effect = $(this).data('loadingEffect');
      console.log("hey");
      var $loading = $(this).parents('.card').waitMe({
          effect: effect,
          text: 'Loading...',
          bg: 'rgba(255,255,255,0.90)',
          color: '#555'
      });

      // setTimeout(function () {
      //     //Loading hide
      //     $loading.waitMe('hide');
      // }, 3200);
    });
  }

  pageChanged(e) {
    this.page.currentPage=e;

    var data = {
      page : this.page
    };

    this._profileService.getPeople(data).subscribe(
      response => { 
        this.display.loading = true;
        this.page.totalItems = response.total;
                
        this.people = response.data;
        console.log('fetched');
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
