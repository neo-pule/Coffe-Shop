import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { PopoverComponent } from 'src/app/component/popover/popover.component';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PopUpComponent } from './component/pop-up/pop-up.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AppComponent,
    PopoverComponent,PopUpComponent ],
  entryComponents: [PopoverComponent,PopUpComponent ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
