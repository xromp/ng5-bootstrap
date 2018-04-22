import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  private people;
  private display= { loading:false};
  constructor(private _profileService:ProfileService) { }
  
  ngOnInit() {
    this.getPeople();
    
  }

  getPeople() {
    this._profileService.getPeople().subscribe(
      data => { 
        this.display.loading = true;        
        console.log(this.display);
        this.people = data;
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
