
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

//Providers/Service
import { ExchangeService } from '../providers/exchangeservice';

//Custom Components
import { TabsPage } from '../pages/tabs/tabs';
import { ListExchangeItem } from '../pages/listexchangeitem/listexchangeitem';
import { EnlistItem } from '../pages/enlistitem/enlistitem';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    ListExchangeItem,
    EnlistItem
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,    
    TabsPage,
    ListExchangeItem,
    EnlistItem
  ],
  providers: [
    ExchangeService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
