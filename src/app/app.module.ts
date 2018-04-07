import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {CameraPage} from "../pages/camera/camera";
import {CameraPageModule} from "../pages/camera/camera.module";
import {Camera} from "@ionic-native/camera";
import {LoadingPage} from "../pages/loading/loading";
import {LoadingPageModule} from "../pages/loading/loading.module";
import { BackendProvider } from '../providers/backend/backend';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CameraPageModule,
    LoadingPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CameraPage,
    LoadingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    BackendProvider,
  ]
})
export class AppModule {
}
