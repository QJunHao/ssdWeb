import { Injectable } from '@angular/core';
import { Adapter } from './adapter';
import { HttpClient } from '@angular/common/http';

export class PredictionResponse {
    constructor(
        public id: string,
        public username: string,
        public match_id: string,
        public result: string,
        public prediction: string, 
        public points_allocated: string, 
    ) { }
}

@Injectable({
    providedIn: 'root'
})
export class PredictionResponseAdapter implements Adapter<PredictionResponse> {
    adapt(item: any): PredictionResponse {
        return new PredictionResponse(
            item.id,
            item.username,
            item.match_id,
            item.result,
            item.prediction,
            item.points_allocated
        );
    }
}