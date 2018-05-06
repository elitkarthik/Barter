import { Component } from '@angular/core';
import{ Item } from '../../models/item'

import { AlertController } from 'ionic-angular';
import { BasePage } from './../basepage';

@Component({
    selector:'page-enlistitem',
    templateUrl:'./enlistitem.html'
})
export class EnlistItem //extends BasePage
{

    newItem: Item = new Item();
    selectedCategories: Array<string>;

    constructor(public alertCtrl: AlertController){
        //super();
    }

    saveNewItem(){

    }

    addOrUploadImage(){
        let alert = this.alertCtrl.create({
            title: 'What do you wish to do?',
            //message: 'What do you wish to do?',
            buttons: [
              {
                text: 'Take new picture',
                handler: () => {
                  console.log('Take new picture clicked');
                }
              },
              {
                text: 'Add existing picture',
                handler: () => {
                  console.log('Add existing picture clicked');
                }
              }
            ]
          });
      
          alert.present();
    }
}
