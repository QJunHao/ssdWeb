import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Tournament, TournamentAdapter } from '../models/Tournament.model';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Adapter} from '../models/adapter';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  constructor(
  	private httpClient: HttpClient,
	  private adapter: TournamentAdapter) { }

    public getDotaTournament():Observable<Tournament[]>  {
        return this.httpClient.get(environment.apiUrl + '/rest/tournament/db/dota').pipe(
            map((data: any[]) => data.map((item: any) => new Tournament(
                item.tournament_id,
                item.tournament_name,
                item.begin_at,
                item.end_at,
                item.league_id,
                item.series_id,
                item.winner_id,
                item.videogame
            ))),
        );
    }
    public getLolTournament():Observable<Tournament[]> {
        return this.httpClient.get(environment.apiUrl + '/rest/tournament/db/lol').pipe(
            map((data: any[]) => data.map((item: any) => new Tournament(
                item.tournament_id,
                item.tournament_name,
                item.begin_at,
                item.end_at,
                item.league_id,
                item.series_id,
                item.winner_id,
                item.videogame
            ))),
        );
    }
}
