import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

// import { People } from '../class/People';

@Injectable()
export class ProfileService {

  constructor(private http:HttpClient) { }

  getPeople(data):any{
    let params = new HttpParams();
    params = params.append('page',data.page.currentPage);
    params = params.append('pageSize',data.page.size);
    

    return this.http.get('http://localhost:8000/api/person',{params:params}) ;
  }

}
