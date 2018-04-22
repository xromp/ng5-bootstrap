import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

// import { People } from '../class/People';

@Injectable()
export class ProfileService {

  constructor(private http:HttpClient) { }

  getPeople(){
    return this.http.get('http://localhost:8000/api/person') ;
  }

}
