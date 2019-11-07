import { Injectable } from '@angular/core';
import { Adapter } from './adapter';
import { HttpClient } from '@angular/common/http';

export class Player {
    constructor(
        public id: string,
        public name: string,
        public first_name: string,
        public last_name: string,
        public current_team: string,
        public team_name: string,
        public videogame: string,
        public hometown: string,
        public role: string,
        public image_url: string
    ) { }
}

@Injectable({
    providedIn: 'root'
})
export class PlayerAdapter implements Adapter<Player> {

    adapt(item: any): Player {
        return new Player(
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
        );
    }
}