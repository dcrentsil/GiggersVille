
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import { Store } from '@ngrx/store';
import { Gigger } from './models/giggers';
import { Observable } from 'rxjs';

import { IAppState } from './redux/store/store';

const loginOptions = new RequestOptions({
    withCredentials: true,
  });

  
@Injectable()
export class GiggersService {
    private baseUrl = 'http://localhost:3000/api';

    private headers = new Headers({'Content-Type': 'application/json'});
    private options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http,
                private store: Store<IAppState>) { }
                
    getgiggers() {
        return this.http.get(this.baseUrl + "/giggers").pipe(
        map((response: Response) => response.json().data));
    }

    getgigs() {
        return this.http.get(this.baseUrl + "/gigs").pipe(
        map((response: Response) => response.json().data));
    }

    creategigger(gigger: Gigger) {
         return this.http.post(this.baseUrl + "/giggers", gigger, {headers: this.headers}).pipe(
         map(response => response.json()));
     }

    deletegigger(id: number): Observable<Gigger>{
        return this.http
        .delete(this.baseUrl + ("/giggers") + "/" + id, this.options).pipe(
        map((res: Response) => res.json()))
        }
    
    deletegigs(id: number): Observable<Gigger>{
        return this.http
        .delete(this.baseUrl + ("/gigs") + "/" + id, this.options).pipe(
        map((res: Response) => res.json()))
        }
    
    getgiggerbyid(_id: number): Observable<Gigger>{ 
        return this.http
        .get(this.baseUrl + ("/giggers") + _id).pipe(
        map(response => response.json()));
    }

    login(username: string, password: string) {
        const body = `{"username":"${username}","password":"${password}"}`;
        console.log(username + "," + password);

        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        
        const options = new RequestOptions({
          headers: headers,
        //   withCredentials: true,
        });
        return this.http
        .post(this.baseUrl + ("/login"), body, options).pipe(
        map(response => response.json()));
    }

    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
      }
}
