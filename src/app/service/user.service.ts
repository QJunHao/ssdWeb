import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { User, UserAdapter } from '../models/User.model';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Adapter} from '../models/adapter';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
	private httpClient: HttpClient,
	private adapter: UserAdapter
    ) { }

    public loginUser(user) {
        return this.httpClient.post<User>(environment.apiUrl + '/useraccount/login/', user);
    }

    public createUser(user) {
        return this.httpClient.post<User>(environment.apiUrl + '/useraccount/create/', user)
    }

    public getUser(username){
        return this.httpClient.get(environment.apiUrl + '/useraccount/' + username);
    }

    public sendResetPasswordEmail(user) {
        return this.httpClient.post<User>(environment.apiUrl + '/useraccount/forgetpassword', user);
    }
    public changePassword(user) {
        return this.httpClient.put<User>(environment.apiUrl + '/useraccount/changepassword', user);
    }
    public sendOTPEmail(user) {
        return this.httpClient.post<User>(environment.apiUrl + '/useraccount/sendemailotp', user);
    }
    public verifyOTP(username,otp) {
        return this.httpClient.post<User>(environment.apiUrl + '/useraccount/verify/' + username + '/' + otp, "");
    }
}