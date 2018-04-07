import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {CameraPage} from "../camera/camera";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {
  }

  goToCamera(): void {
    this.navCtrl.push(CameraPage);
  }
}
