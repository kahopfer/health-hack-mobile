import {MyApp} from './app.component';
import {HomePage} from "../pages/home/home";
import {BrowserModule} from "@angular/platform-browser";
import {LoadingPageModule} from "../pages/loading/loading.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {IonicApp, IonicErrorHandler, IonicModule} from "ionic-angular";
import {ZoomAreaModule} from "ionic2-zoom-area";
import {ResultsPage} from "../pages/results/results";
import {ErrorHandler, NgModule} from "@angular/core";
import {API_BASE_URL, VisionClient} from "./app.api";
import {BackendProvider} from "../providers/backend/backend";
import {SplashScreen} from "@ionic-native/splash-screen";
import {StatusBar} from "@ionic-native/status-bar";
import {ImageProvider} from "../providers/image/image";
import {LoadingPage} from "../pages/loading/loading";
import {ResultsPageModule} from "../pages/results/results.module";
import {HttpClientModule} from "@angular/common/http";
import {Camera} from "@ionic-native/camera";

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
    VisionClient
  ]
})
export class AppModule {
}

export function baseUrl(): string {
  return `https://hhstl2018-stl.herokuapp.com/api`;
}
