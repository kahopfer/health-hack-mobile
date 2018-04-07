import {HttpClientModule} from '@angular/common/http';
import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Camera} from '@ionic-native/camera';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {HomePage} from '../pages/home/home';
import {Camera} from "@ionic-native/camera";
import {LoadingPage} from "../pages/loading/loading";
import {LoadingPageModule} from "../pages/loading/loading.module";
import {ResultsPage} from "../pages/results/results";
import {ResultsPageModule} from "../pages/results/results.module";
import { BackendProvider } from '../providers/backend/backend';
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";
import {HttpModule} from "@angular/http";
import { ImageProvider } from '../providers/image/image';
import { ZoomAreaModule } from 'ionic2-zoom-area';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LoadingPage} from '../pages/loading/loading';
import {LoadingPageModule} from '../pages/loading/loading.module';
import {ResultsPage} from '../pages/results/results';
import {ResultsPageModule} from '../pages/results/results.module';
import {BackendProvider} from '../providers/backend/backend';
import {ImageProvider} from '../providers/image/image';
import {API_BASE_URL} from './app.api';

import {MyApp} from './app.component';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    LoadingPageModule,
    HttpClientModule,
    ResultsPageModule,
    BrowserAnimationsModule,
    ZoomAreaModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,

    LoadingPage,
    ResultsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: API_BASE_URL, useFactory: baseUrl}, Camera,
    BackendProvider,
    ImageProvider,
  ]
})
export class AppModule {
}

export function baseUrl(): string {
  return `https://hhstl2018-stl.herokuapp.com/api`;
}
