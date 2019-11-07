import { Injectable } from '@angular/core';
import { Adapter } from './adapter';
import { HttpClient } from '@angular/common/http';

export class Opponent {
    constructor(
        public id: string,
        public acronym: string,
        public name: string,
        public image_url: string,
        public match_id: string,
        public tournament_id: string,
    ) { }
}

@Injectable({
    providedIn: 'root'
})
export class OpponentAdapter implements Adapter<Opponent> {

    adapt(item: any): Opponent {
        return new Opponent(
            item.id,
            item.acronym,
            item.name,
            item.image_url,
            item.match_id,
            item.tournament_id
        );
    }
}