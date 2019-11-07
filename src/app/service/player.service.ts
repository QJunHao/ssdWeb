import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Player, PlayerAdapter } from '../models/Player.model';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Adapter} from '../models/adapter';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(
  	private httpClient: HttpClient,
	private adapter: PlayerAdapter) { }

  	public getDotaPlayer():Observable<Player[]>  {
        return this.httpClient.get(environment.apiUrl + '/rest/player/db/dota').pipe(
            map((data: any[]) => data.map((item: any) => new Player(
               	item.id,
	            item.name,
	            item.first_name,
	            item.last_name,
	            item.current_team,
	            item.team_name,
	            item.videogame,
	            item.hometown,
	            item.role,
	            item.image_url
            ))),
        );
    }
    public getLolPlayer():Observable<Player[]>  {
        return this.httpClient.get(environment.apiUrl + '/rest/player/db/lol').pipe(
            map((data: any[]) => data.map((item: any) => new Player(
               	item.id,
	            item.name,
	            item.first_name,
	            item.last_name,
	            item.current_team,
	            item.team_name,
	            item.videogame,
	            item.hometown,
	            item.role,
	            item.image_url
            ))),
        );
    }
}
