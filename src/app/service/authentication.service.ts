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
                    localStorage.setItem('currentUser', JSON.stringify({ username: user.username, token: result['token'] }));
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
        return "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0IiwidXNlcm5hbWUiOiJ0ZXN0IiwicGFzc3dvcmQiOiJwYXNzIn0.4OrMAqpEwx87ghNpqkSsCv2brXB4n1AZ4n-k9VVS1Y-n6QkeFmmmLrQIVqpCjrW31hLToG9ZSnC1PGIKL9fdFQ"
    }
}