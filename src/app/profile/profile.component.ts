import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { UserInventoryService} from '../service/user-inventory.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService: UserService, private userInventoryService: UserInventoryService) { }

  jsonResult = ""
  userInventory = []

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
      this.jsonResult = JSON.parse(JSON.stringify(data))
      this.user.email = this.jsonResult.email
      this.user.mobile_number = this.jsonResult.mobile_number
    });
    this.userInventoryService.getCurrentUserFlair(this.user.username).subscribe( data => {
      if (data.length > 0){
        for ( const item in (data)) {
          this.userInventory.push(data[item]);
        }
      }}
    );
  }
}
