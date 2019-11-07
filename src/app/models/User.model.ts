import { Injectable } from '@angular/core';
import { Adapter } from './adapter';
import { HttpClient } from '@angular/common/http';

export class User {
    constructor(
        public username: string,
        public password: string,
        public profile_picture: string,
        public mobile_number: string,
        public email: string,
        public status: string,
        public password_hash: string,
        public salt: string,
    ) { }
}

@Injectable({
    providedIn: 'root'
})
export class UserAdapter implements Adapter<User> {

    adapt(item: any): User {
        return new User(
            item.username,
            item.password,
            item.profile_picture,
            item.mobile_number,
            item.email,
            item.status,
            item.password_hash,
            item.salt
        );
    }
}