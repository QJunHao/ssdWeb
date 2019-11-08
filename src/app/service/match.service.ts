import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Match, MatchAdapter } from '../models/Match.model';
import { Opponent, OpponentAdapter } from '../models/Opponent.model';
import { PredictionResponse, PredictionResponseAdapter } from '../models/PredictionResponse.model';
import { Prediction, PredictionAdapter } from '../models/Prediction.model';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Adapter} from '../models/adapter';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(
  private httpClient: HttpClient,
	private adapter: MatchAdapter) { }
  
   	public getDotaMatch():Observable<Match[]>  {
        return this.httpClient.get(environment.apiUrl + '/rest/match/db/dota').pipe(
            map((data: any[]) => data.map((item: any) => new Match(
              item.match_id,
              item.begin_at,
              item.end_at,
              item.match_type,
              item.match_name,
              item.num_of_games,
              item.league_id,
              item.series_id,
              item.tournament_id,
              item.winner_id,
              item.videogame
            ))),
        );
    }
    public getLolMatch():Observable<Match[]>  {
        return this.httpClient.get(environment.apiUrl + '/rest/match/db/lol').pipe(
            map((data: any[]) => data.map((item: any) => new Match(
              item.match_id,
              item.begin_at,
              item.end_at,
              item.match_type,
              item.match_name,
              item.num_of_games,
              item.league_id,
              item.series_id,
              item.tournament_id,
              item.winner_id,
              item.videogame
            ))),
        );
    }
    public getRelatedOpponents(matchId):Observable<Opponent[]>  {
        return this.httpClient.get(environment.apiUrl + '/rest/opponent/opponents/' + matchId).pipe(
            map((data: any[]) => data.map((item: any) => new Opponent(
              item.id,
              item.acronym,
              item.name,
              item.image_url,
              item.match_id,
              item.tournament_id
            ))),
        );
    }
    vote(prediction) {
      return this.httpClient.post<Prediction>(environment.apiUrl + '/rest/userprediction/create', prediction)
        .pipe(map(result => {
          console.log(result)
            if (result['result']){
              return result
            }   
        }));
    }
    checkForExistingVote() {
      let currentUserSession = JSON.parse(localStorage.getItem('currentUser'))
      return this.httpClient.get(environment.apiUrl + '/rest/userprediction/' + currentUserSession.username).pipe(
        map((data: any[]) => data.map((item: any) => new PredictionResponse(
          item.id,
          item.username,
          item.match_id,
          item.result,
          item.prediction,
          item.points_allocated
        ))),
      );
    }
}
