import {Injectable} from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { constructor } from 'q';
import {LoginResultModel, QuerySelectorsModel } from '../models'

  @Injectable({
    providedIn: 'root'
  })
  
export class ApiService {

    loginResult : any;

    constructor(private http: HttpClient) {

    }

    login(email: string, password: string):  Observable<LoginResultModel>{
    // this.loginResult =  new LoginResultModel("TOKEN", "");
    
    return this.http.post<LoginResultModel>('http://localhost:8090/auth/login', {
      email: email,
      password: password
    });
    // return this.loginResult;
  }

    regNewUser(userName: string, email: string, password: string):  Observable<LoginResultModel>{
      // this.loginResult =  new LoginResultModel("TOKEN", "");
      
      return this.http.post<LoginResultModel>('http://localhost:8090/auth/registration', {
        userName : userName,
        email: email,
        password: password
      });
    }

    searchHotels(city: string, searchString: string): Observable<string>{
      return this.http.post<string>('http://localhost:8090/hotels/search', {
        city: city,
        searchString: searchString,
      });
    }

    getQuerySelectors(): Observable<QuerySelectorsModel>{
      return this.http.get<QuerySelectorsModel>('http://localhost:8090/hotels/search');
    }


    reviewOperation(reviewInfo : any): Observable<String>{
      return this.http.post<String>('http://localhost:8090/hotels/reviews', JSON.stringify(reviewInfo));
    }

}