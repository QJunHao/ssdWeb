import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-reset-email',
  templateUrl: './reset-email.component.html',
  styleUrls: ['./reset-email.component.css']
})
export class ResetEmailComponent implements OnInit {

  username = ""
  email = ""
  ErrorMsg = ""

  user = {
    username: this.username,
    email: this.email
  }

  constructor(private userService: UserService ) { }

  ngOnInit() {
  }
  sendResetPasswordEmail(){
    if (!this.username || !this.email){
      this.ErrorMsg = "All fields are required" 
    }
  	this.userService.sendResetPasswordEmail(this.user).subscribe( data => {
      this.ErrorMsg = "The new password has been sent to your email if you have entered a valid email address currently in the database."
    });
  }
}
