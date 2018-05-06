import { Component, ViewChild } from '@angular/core';

import { AlertController, App, ItemSliding, ModalController, NavController,
     ToastController, LoadingController, List, Platform } from 'ionic-angular';

import { ExchangeService } from '../../providers/exchangeservice';
import { Item } from '../../models/item';

@Component({
    templateUrl: 'listexchangeitem.html'
})
export class ListExchangeItem{

    @ViewChild('exchangeList', { read: List }) exchangeList: List;

    //hold data returned by REST
    exchangeItems: Array<Item> = [];

    constructor(public platform: Platform,
                public exchangeService: ExchangeService, 
                public alertCtrl: AlertController,
                public app: App,
                public loadingCtrl: LoadingController,
                public modalCtrl: ModalController,
                public navCtrl: NavController,
                public toastCtrl: ToastController){
        
    }

    ionViewDidLoad() {
        this.app.setTitle('Items List');
        this.initialize();
      }

      openSelectedItem(slidingItem: ItemSliding, selectedItem: Item){

      }

      //To mark the item being selected as Favorite.
      markItemAsFavorite(slidingItem: ItemSliding, selectedItem: Item){

      }

    //Load data from REST
    initialize(){
         this.exchangeService.getExchangeListData()
                        .subscribe(data =>{
                            this.exchangeItems = data;
                        });
    }

    //REFRESH UI If user performs swipe action
    // doRefresh(refresher){
    //     console.log("Begin async operation", refresher);
    
    //     setTimeout(() => {
    //         console.log('Async operation has ended');
    //         refresher.Component();        
    //     }, 2000);
    // }
}