import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User, UserAdapter } from '../models/User.model';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

    errorMsg = ""
    confirmPassword = ""

    user = {
	    username: JSON.parse(localStorage.getItem('currentUser')).username,
	    password: ""
    }

	constructor(private userService: UserService) { }

  ngOnInit() {
    
  }
  public changePassword(){
    var passwordRegex = new RegExp('^[^\\t\\n\\r]{8,128}$')

    if (!this.user.password || !this.confirmPassword){
      this.errorMsg = "All fields are required."
    }
    else if (this.user.password != this.confirmPassword){
      this.errorMsg = "Password and confirm password must be the same."
    }
    else if (!(passwordRegex.test(this.user.password))){
      this.errorMsg = "Password need to be minimum 8 to 128 characters long!"
    }
    else{
      this.userService.changePassword(this.user).subscribe( data => {
        console.log(this.user.password)
        console.log("change")
        console.log(data)
        if(data["updated"] == "true"){
          this.errorMsg = "Password has been updated successfully."
        }
        else{
          this.errorMsg = "Unable to use old password as new password."
        }
      });
    }
  }
}