import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HomePage} from '../pages/home/home';

console.log = (message: string): void => {
  document.getElementById("console").innerHTML += "<br/>" + message;
};
console.error = console.debug = console.info = console.log;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(
      (): void => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        statusBar.styleDefault();
        splashScreen.hide();
        
        console.log("a");
        console.log("a");
        console.log("a");
        console.log("a");
        console.log("a");
        console.log("a");
        console.log("a");
        console.log("a");
        console.log("a");
        console.log("a");
        console.log("a");
        console.log("a");
        console.log("a");
        console.log("a");
        console.log("a");
        console.log("a");
        console.log("a");
        console.log("a");
        console.log("a");
        console.log("a");
        console.log("a");
        console.log("a");
        console.log("a");
        console.log("a");
        console.log("a");
        console.log("a");
        console.log("a");
        console.log("a");
        console.log("a");
        console.log("a");
      }
    );
  }
}
