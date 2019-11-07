import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { User, UserAdapter } from '../models/User.model';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(user) {
        return this.http.post<User>(environment.apiUrl + '/useraccount/login', user)
            .pipe(map(result => {
                if (result['token']){
                    //localStorage.setItem('currentUser', JSON.stringify({ username: user.username, token: result['token'] }));
                    localStorage.setItem('currentUser', JSON.stringify({ username: "junhao", token: this.getToken() }));
                    console.log(localStorage.getItem('currentUser'))
                    this.currentUserSubject.next((JSON.parse(localStorage.getItem('currentUser'))))
                    return result;
                }   
            }));
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
    getToken(){
        //return localStorage.getItem("token")
        return "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkb3RhZmFuMjIiLCJ1c2VybmFtZSI6ImRvdGFmYW4yMiIsInBhc3N3b3JkIjoiMTIzNDU2In0.7N77Z2MMp6MgZyb04Xi1Q-msQzxMri2BFI9WiJ6XoQuqQLAftmEQkT5IbzLyrRDhctm54o1YZO4Uyzm5p8gzKQ"
    }
}