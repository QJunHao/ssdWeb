import { Injectable } from '@angular/core';
import { Adapter } from './adapter';
import { HttpClient } from '@angular/common/http';

export class Flair {
    constructor(
        public item_id: string,
        public name: string,
        public image: string,
        public cost: string,
    ) { }
}

@Injectable({
    providedIn: 'root'
})
export class FlairAdapter implements Adapter<Flair> {

    adapt(item: any): Flair {
        return new Flair(
            item.item_id,
            item.name,
            item.image,
            item.cost
        );
    }
}