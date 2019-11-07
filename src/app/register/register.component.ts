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
    status: null,
    password_hash: null,
    salt: null,
  }

  constructor(private userService: UserService) { 
    
  }

  ngOnInit() {
  	
  }
  createUser(): void {
    this.userService.createUser(this.user).subscribe( data => {
      console.log(data);
    });
  }
}