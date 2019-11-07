import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export class Tournament {
    constructor(
        public tournament_id: number,
        public tournament_name: string,
        public begin_at: string,
        public end_at: string,
        public league_id: string,
        public series_id: string,
        public winner_id: string,
        public videogame: string,
    ) { }
}

@Injectable({
    providedIn: 'root'
})
export class TournamentAdapter implements Adapter<Tournament> {
    adapt(item: any): Tournament {
        return new Tournament(
            item.tournament_id,
            item.tournament_name,
            item.begin_at,
            item.end_at,
            item.league_id,
            item.series_id,
            item.winner_id,
            item.videogame,
        );
    }
}