import { Injectable } from '@angular/core';
import { Adapter } from './adapter';
import { HttpClient } from '@angular/common/http';

export class UserInventory {
    constructor(
        public id: string,
        public username: string,
        public points: Number,
        public item_id: string,
        public item_in_use: string,
    ) { }
}

@Injectable({
    providedIn: 'root'
})
export class UserInventoryAdapter implements Adapter<UserInventory> {

    adapt(item: any): UserInventory {
        return new UserInventory(
            item.id,
            item.username,
            item.points,
            item.item_id,
            item.item_in_use
        );
    }
}