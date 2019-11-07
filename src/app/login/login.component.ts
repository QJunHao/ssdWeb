import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { UserService } from '../service/user.service';
import { User, UserAdapter } from '../models/User.model';
import { first } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    username: "username123",
    password: "pass123123",
    profile_picture: null,
    mobile_number: null,
    email: null,
    status: null,
    password_hash: null,
    salt: null,
  }

  loginResult = ""
	validLogin = false
  returnUrl : string
  submitted = false
  loading = false
  error = '';

	constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthenticationService,
    private userService: UserService 
  ) { }

	ngOnInit() {
    // get return url from route parameters or default to '/'
    const currentUser = this.authService.currentUserValue;
    if (currentUser) {
      this.router.navigate(['/dotaTournament']);
    }
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dotaTournament';
	}

  checkLogin(): void {
    this.submitted = true;

    this.loading = true;
    this.authService.login(this.user).pipe(first()).subscribe(
      data => {
          this.validLogin = true;
          this.router.navigate([this.returnUrl]);
      },
      error => {
          this.error = error;
          this.loading = false;
         
      });
    if (this.validLogin == false){
      this.loginResult = "The username or password is not correct"
    }
    this.loginResult = ""
  }
}