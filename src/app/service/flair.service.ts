import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Flair, FlairAdapter } from '../models/Flair.model';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Adapter} from '../models/adapter';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FlairService {

  constructor(
  	private httpClient: HttpClient,
	private adapter: FlairAdapter) { }

  	public getAllFlair():Observable<Flair[]>  {
        return this.httpClient.get(environment.apiUrl + '/rest/item/all').pipe(
            map((data: any[]) => data.map((item: any) => new Flair(
                item.item_id,
  	            item.name,
  	            item.image,
  	            item.cost
            ))),
        );
    }
}
