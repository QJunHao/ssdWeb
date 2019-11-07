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
  username = localStorage.getItem('currentUser');
  purchaseString = ""
  displayStatus = []
  itemFound = false

  ngOnInit() {
    console.log(this.username)
  	this.flairService.getAllFlair().subscribe(data => {
      for ( const item in (data)) {
        this.flair.push(data[item]);
      }
    });


    this.userInventoryService.getCurrentUserFlair("useruser").subscribe(data => {
      if (data.length > 0){
        for ( const item in (data)) {
          console.log(data[item])
          this.userInventory.push(data[item]);
        }
      }
    });
  }
  public purchaseFlair(item_id, item_cost): void {
    console.log( Number(item_cost))
    console.log( Number(item_id))
    this.userInventoryService.purchaseFlair("useruser", Number(item_id), Number(item_cost)).subscribe(
        data => {
          this.purchaseString = "Flair has been purchased successfully."
    });
  }

  //0 = Item purchased
  //1 = Purchase button
  //2 = Do not have sufficient points
  // normalizeDisplayData(){
    
  //   this.flair.forEach(function (flair) {
  //     console.log("normalizeDisplayData")
  //     for (let i = 0; i < this.userInventory.length; i++){
  //       if (this.userInventory[i].id == this.flair.item_id){
  //         this.displayStatus.push(0)
  //         itemFound = true
  //         break
  //       }
  //       if (!itemFound){
  //         if (this.userInventory[0].points >= this.flair.cost)
  //           this.displayStatus.push(1)
  //         else
  //           this.displayStatus.push(2)
  //       }
  //     }
  //   });

  //   this.displayStatus.forEach(function (value) {
  //     console.log(value)
  //   });
  // }
  itemFoundtoFalse(){
    this.itemFound = false
    console.log("isFalse")
  }
   itemFoundtoTrue(){
    this.itemFound = true
     console.log("isTrue")
  }
}
