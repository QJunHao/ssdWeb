import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService: UserService) { }

  user = {
    username: JSON.parse(localStorage.getItem('currentUser')).username,
    password: null,
    profile_picture: null,
    mobile_number: null,
    email: null,
    status: null,
    password_hash: null,
    salt: null,
  }

  ngOnInit() {
    this.userService.getUser(this.user.username).subscribe( data => {
        for ( const item in (data)) {
          this.user.username = data[item]["username"]
          this.user.email = data[item]["email"]
          this.user.mobile_number = data[item]["mobile_number"]
          break;
        }
    });
  }
}
