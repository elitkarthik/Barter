
import { Component } from '@angular/core';

//import { HomePage } from './../home/home';
import { ListExchangeItem } from './../listexchangeitem/listexchangeitem'

@Component({
    templateUrl: 'tabs.html'    
})
export class TabsPage{

    //tab1Root = HomePage;
    tab1Root = ListExchangeItem;
    
    constructor(){

    }
}