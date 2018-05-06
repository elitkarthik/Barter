
import { Component } from '@angular/core';

//import { HomePage } from './../home/home';
import { ListExchangeItem } from './../listexchangeitem/listexchangeitem'
import { EnlistItem } from './../enlistitem/enlistitem'
import { Login } from './../login/login';

@Component({
    templateUrl: 'tabs.html'    
})
export class TabsPage{

    //tab1Root = HomePage;
    //tab1Root = ListExchangeItem;
    //tab1Root = EnlistItem;
    tab1Root = Login;
    
    constructor(){

    }
}