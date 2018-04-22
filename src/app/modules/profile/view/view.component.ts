import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  private people;
  constructor(private _profileService:ProfileService) { }
  
  ngOnInit() {
    this.getPeople();
    
  }

  getPeople() {
    this._profileService.getPeople().subscribe(
      data => { this.people = data},
      err => console.error(err),
      () => console.log('done loading people')
    )
  }
}
