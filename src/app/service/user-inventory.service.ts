import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { UserInventory, UserInventoryAdapter } from '../models/UserInventory.model';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Adapter} from '../models/adapter';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserInventoryService {

	constructor(	
  	private httpClient: HttpClient,
		private adapter: UserInventoryAdapter) { }

	public getCurrentUserFlair(username):Observable<UserInventory[]>  {
    return this.httpClient.get(environment.apiUrl + '/rest/userinventory/'+ username).pipe(
        map((data: any[]) => data.map((item: any) => new UserInventory(
            item.id,
            item.username,
            item.points,
            item.item_id,
            item.item_in_use
        ))),
    );
  }
  public purchaseFlair(username, item_id, item_cost)  {
      return this.httpClient.post<UserInventory>(environment.apiUrl + '/rest/userinventory/buy/'+ username + '/' + item_id + '/' + item_cost, "").pipe(map(result => {
        console.log(environment.apiUrl + '/rest/userinventory/buy/'+ username + '/' + item_id + '/' + item_cost)
        if (result['purchase'] == 'true'){
          return result;
        }  
    }));
  }
}
