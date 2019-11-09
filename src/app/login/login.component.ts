import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { UserService } from '../service/user.service';

import { first } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ModalService } from '../_modal';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    username: null,
    password: null,
    profile_picture: null,
    mobile_number: null,
    email: null,
    role: null
  }

  loginResult = ""
  validLogin = false
  returnUrl : string
  submitted = false
  loading = false
  error = '';
  bodyText: string;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthenticationService,
    private userService: UserService,
    private modalService: ModalService 
    ) { }

  ngOnInit() {
    const currentUser = this.authService.currentUserValue;
    if (currentUser) {
      this.router.navigate(['/dotaTournament']);
    }
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dotaTournament';
    this.bodyText = '';

  }

  checkLogin(): void {
    if (!this.user.username || !this.user.password){
      this.loginResult = "Both the username and password are required."
    }
    else{
      this.submitted = true;

      this.loading = true;
      this.authService.login(this.user).pipe(first()).subscribe(
        data => {
          this.validLogin = true;
          // this.router.navigate([this.returnUrl]);
          this.modalService.open("custom-modal-1");

        },
        error => {
          this.error = error;
          this.loading = false;
        });
      if (this.validLogin == false){
        this.loginResult = "The username or password is not correct"
      }
    }
  }  

  openModal() {
    this.modalService.open("custom-modal-1");
  }

  closeModal() {
    this.modalService.close("custom-modal-1");
  }
}