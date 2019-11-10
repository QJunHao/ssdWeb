import { Component, OnInit } from '@angular/core';
import { FlairService} from '../service/flair.service';
import { UserInventoryService} from '../service/user-inventory.service';

@Component({
  selector: 'app-flair',
  templateUrl: './flair.component.html',
  styleUrls: ['./flair.component.css']
})
export class FlairComponent implements OnInit {

  constructor(private flairService: FlairService, private userInventoryService: UserInventoryService) { }

  username = JSON.parse(localStorage.getItem('currentUser')).username
  flair = []
  userInventory = []

  ngOnInit() {
    this.flairService.getAllFlair().subscribe(data => {
      for ( const item in (data)) {
        this.flair.push(data[item]);
      }
    });

    this.userInventoryService.getCurrentUserFlair(this.username).subscribe(data => {
        console.log(data)
        if (data.length > 0){
          for ( const item in (data)) {
              this.userInventory.push(data[item]);
          }
        }}
    );
  }

  public addItemToPurchase(item_id): void {
    localStorage.setItem("itemID", item_id)
    window.location.href = 'flairView';
  }
}