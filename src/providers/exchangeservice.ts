import {Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { Item } from '../models/item'

@Injectable()
export class ExchangeService{
    constructor(public http: Http){}

    getExchangeListData() : Observable<Array<Item>> {
        console.log('inside getexchange');
        return this.http.get('assets/data/data.json')
            .map(this.processData, this);
    }

    processData(data: Response){
        debugger;
        console.log('data is -' + data.json() );
        return data.json().items as Array<Item>;
    }
}