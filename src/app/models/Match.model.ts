import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export class Match {
	constructor(
        public match_id: number,
        public begin_at: string,
        public end_at: string,
        public match_type: string,
        public match_name: string,
        public num_of_games: string,
        public league_id: string,
        public series_id: string,
        public tournament_id: string,
        public winner_id: string,
        public videogam: string
    ) { }
}
@Injectable({
    providedIn: 'root'
})
export class MatchAdapter implements Adapter<Match> {
    adapt(item: any): Match {
        return new Match(
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
        );
    }
}