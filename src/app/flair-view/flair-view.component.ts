import { Component, OnInit } from '@angular/core';
import { FlairService} from '../service/flair.service';
import { UserInventoryService } from '../service/user-inventory.service';

@Component({
  selector: 'app-flair-view',
  templateUrl: './flair-view.component.html',
  styleUrls: ['./flair-view.component.css']
})
export class FlairViewComponent implements OnInit {

	username = JSON.parse(localStorage.getItem('currentUser')).username
	itemId = localStorage.getItem('itemID')
	flairItem = []
	userInventory = []
  itemFound = false
  userCurrentPoint = 0
  purchaseString = ""

	constructor(private flairService: FlairService, private userInventoryService: UserInventoryService) { }

	ngOnInit() {
	this.userInventoryService.getCurrentUserFlair(this.username).subscribe(data => {
    	if (data.length > 0){
        this.userCurrentPoint = data[0]["points"]
      	for ( const item in (data)) {
        		this.userInventory.push(data[item]);
      	}
    	}}
	);

	this.flairService.getFlairByID(this.itemId).subscribe(data => {
    	if (data.length > 0){
    		//localStorage.removeItem('itemID')
      	for ( const item in (data)) {
        		this.flairItem.push(data[item]);
            console.log(data[item]["cost"])
      	}
    	}});
	}
  	
	public purchaseFlair(item_id, item_cost): void {
    this.userInventoryService.purchaseFlair(this.username, Number(item_id), Number(item_cost)).subscribe(
        data => {
            this.purchaseString = "Flair has been purchased successfully."
          	localStorage.setItem("purchaseMsg", this.purchaseString)
          	window.location.href = 'flair';
    	});
  	}
  public existingItemFound(){
    this.itemFound = true
  }
}
