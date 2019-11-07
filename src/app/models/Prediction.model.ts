import { Injectable } from '@angular/core';
import { Adapter } from './adapter';
import { HttpClient } from '@angular/common/http';

export class Prediction {
    constructor(
        public username: string,
        public match_id: string,
        public prediction: string
    ) { }
}

@Injectable({
    providedIn: 'root'
})
export class PredictionAdapter implements Adapter<Prediction> {

    adapt(item: any): Prediction {
        return new Prediction(
            item.username,
            item.match_id,
            item.prediction
        );
    }
}