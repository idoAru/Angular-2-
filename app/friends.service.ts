import {Injectable} from '@angular/core';
import {Http, HTTP_PROVIDERS} from '@angular/http';

@Injectable()

export class FriendService { 

    friends:Array<any>;

    constructor(private http:Http) 
        {
            //console.log(">>friend.service.ts:constructor--")
            http.request('./data/people.json')
                    .subscribe(response => this.friends = response.json());
    }

        getFriends()
        {
            //console.log(">>friend.service.ts:getFriends--")
            console.log(this.friends)
            return this.friends
        }   
}