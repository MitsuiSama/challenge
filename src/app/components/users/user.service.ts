import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Rx';
import { MockUserService } from './mock-user.service';

@Injectable()
export class UserService {

  public USERS;

  constructor(private mockData:MockUserService) { 
     this.USERS = this.mockData.createDb();
     this.USERS = this.USERS.USERS;
  
  }

  // With this method we'll return the users object but we could just as easily return a promise
  // from the database 

  public getUsers():Observable<any[]>{
    
    return of(this.USERS);
  }

  public getUser(id):Observable<any>{
    return of(this.USERS.filter(x=> x.id == id));
  }

}
