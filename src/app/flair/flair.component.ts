import { Component, OnInit } from '@angular/core';
import { FlairService} from '../service/flair.service';
import { UserInventoryService } from '../service/user-inventory.service';

@Component({
  selector: 'app-flair',
  templateUrl: './flair.component.html',
  styleUrls: ['./flair.component.css']
})
export class FlairComponent implements OnInit {

  constructor(private flairService: FlairService, private userInventoryService: UserInventoryService) { }

  flair = []
  userInventory = []
  username = JSON.parse(localStorage.getItem('currentUser')).username
  purchaseString = ""
  itemFound = false

  ngOnInit() {
    this.itemFound = false 
  	this.flairService.getAllFlair().subscribe(data => {
      for ( const item in (data)) {
        this.flair.push(data[item]);
      }
    });

    this.userInventoryService.getCurrentUserFlair(this.username).subscribe(data => {
      if (data.length > 0){
        for ( const item in (data)) {
          this.userInventory.push(data[item]);
        }
      }
    });
    this.purchaseString = localStorage.getItem("purchaseMsg")
    localStorage.removeItem("purchaseMsg")
  }
  public purchaseFlair(item_id, item_cost): void {
    this.userInventoryService.purchaseFlair(this.username, Number(item_id), Number(item_cost)).subscribe(
        data => {
          this.purchaseString = "Flair has been purchased successfully."
          localStorage.setItem("purchaseMsg", this.purchaseString)
          window.location.href = 'flair';
    });
  }

  existingItemFound(){
    this.itemFound = true
    console.log("isFalse")
  }
}