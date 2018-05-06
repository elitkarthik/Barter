import { StatusBar } from '@ionic-native/status-bar';

import {  Platform } from 'ionic-angular';

export class BasePage{
    constructor(public platform: Platform,
                statusBar: StatusBar){

       // if (platform.ready().then(function() {
            if (platform.is('android')){
                statusBar.overlaysWebView(true);
                statusBar.backgroundColorByHexString('#ffffff');
            }
       // }));
    }
}
