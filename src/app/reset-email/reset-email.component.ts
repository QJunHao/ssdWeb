import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-reset-email',
  templateUrl: './reset-email.component.html',
  styleUrls: ['./reset-email.component.css']
})
export class ResetEmailComponent implements OnInit {

  constructor() { }

  username = ""
  email = ""
  emailMsg = ""

  user = {
    username: this.username,
    email: this.email
  }

  ngOnInit() {
  }
  sendResetPasswordEmail(){
  	this.userService.sendResetPasswordEmail(this.user).subscribe( data => {
    	console.log(data)
    });
  }
}
