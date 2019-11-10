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
  otpText: string;
  errorMsg = "";
  jsonResult = "";
  registerMsg = ""

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
          if (data == "valid"){
            this.validLogin = true;
            this.authService.nullInvalidSession()
            this.openModal()
            //this.router.navigate([this.returnUrl]);
          }
          else{
            this.loginResult = "The username or password is not correct"
          }
        },
        error => {
          this.error = error;
          this.loading = false;
        }
      );
    }
  }
  // function to open pop up
  openModal() {
    this.resendOTP()
    this.modalService.open("custom-modal-1");
  }
  // function to close pop up
  closeModal() {
    this.modalService.close("custom-modal-1");
    this.user.username = null
    this.user.password = null
    this.authService.logout()
  }

  checkRegex(): void {
    var otpRegex = new RegExp('^[0-9]{6,6}$') 
    if (!(otpRegex.test(this.otpText))){
      this.errorMsg = "Please only enter 6 digit number"
    }
    else{
      
      this.errorMsg = "Verifying..."
      //send email
      this.userService.verifyOTP(this.user.username, this.otpText).subscribe(
        data => {
          this.jsonResult = JSON.parse(JSON.stringify(data))    
          // this.errorMsg =  "hihi " + typeof this.jsonResult.verified;  
          if(this.jsonResult.verified === "true"){
            //if OTP correct
            this.modalService.close("custom-modal-1");
            this.authService.setcurrentUserSubject()
            this.router.navigate(['/dotaTournament']);
          }
          else{
            //if OTP wrong
            this.errorMsg = "Wrong OTP!"
          }    
        });        
    }
  }

  resendOTP(): void{
    //send email
    this.errorMsg = "OTP sent. Please check your email"
    this.userService.sendOTPEmail(this.user).subscribe( data => {
      this.user.username = this.user.username
    })
  }  
}