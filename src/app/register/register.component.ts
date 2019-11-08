import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { User, UserAdapter } from '../models/User.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = {
    username: null,
    password: null,
    profile_picture: null,
    mobile_number: null,
    email: null,
    role: false
  }
  invalidRegistration = false
  errorMsg = ""
  repeatPassword = ""

  constructor(private userService: UserService) { 
    
  }

  ngOnInit() {

  }
  createUser(): void {
    var usernameRegex = new RegExp('^[a-zA-Z0-9]{4,16}$') 
    var passwordRegex = new RegExp('^[^\\t\\n\\r]{8,128}$')
    var mobileRegex = new RegExp('^(8|9)\\d{7}$') 
    //var emailRegex = new RegExp('^(?:[a-z0-9!#$%&\'*+/=?^_{|}~-]+(?:\\\\.[a-z0-9!#$%&\'*+/=?^_{|}~-]+)*|"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])$)')

    if (!this.user.username || !this.user.password || !this.user.mobile_number || !this.user.email || !this.repeatPassword){
      this.errorMsg = "Every fields are required"
    }
    else if (!(usernameRegex.test(this.user.username))){
      this.errorMsg = "Username must have at least 4 characters and a maximum length of 128 characters. Special characters are not allowed."
    }
    else if (!(passwordRegex.test(this.user.password))){
      this.errorMsg = "Password must have a minimum of 8 characters"
    }
    else if (!(mobileRegex.test(this.user.mobile_number))){
      this.errorMsg = "Mobile number must contains 8 numbers and starts with 8 or 9"
    }
    // else if (!(emailRegex.test(this.user.email))){
    //   this.errorMsg = "Email must be in a valid email format"
    // }
    else if (this.repeatPassword != this.user.password){
      this.errorMsg = "Confirm password must be the same as password"
    }
    else {
      this.userService.createUser(this.user).subscribe( data => {
        this.user.username = null
        this.user.password = null
        this.user.profile_picture = null
        this.user.mobile_number = null
        this.user.email = null
        this.user.role = false
        this.repeatPassword = null
        this.errorMsg = "Account created successfully"
      });
    }
  }
}