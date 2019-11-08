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
  emailMsg = ""

  user = {
    username: this.username,
    email: this.email
  }

  constructor(private userService: UserService ) { }

  ngOnInit() {
  }
  sendResetPasswordEmail(){
  	this.userService.sendResetPasswordEmail(this.user).subscribe( data => {
    	if(data['email_sent'] == "true"){
        console.log(data['email_sent'])
      }
    });
  }
}
