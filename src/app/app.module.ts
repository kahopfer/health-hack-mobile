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
import {ResultsPage} from "../pages/results/results";
import {ResultsPageModule} from "../pages/results/results.module";
import { BackendProvider } from '../providers/backend/backend';
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";
import {HttpModule} from "@angular/http";
import { ImageProvider } from '../providers/image/image';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CameraPageModule,
    LoadingPageModule,
    HttpClientModule,
    ResultsPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CameraPage,
    LoadingPage,
    ResultsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    BackendProvider,
    ImageProvider,
  ]
})
export class AppModule {
}
