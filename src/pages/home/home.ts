import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {CameraPage} from "../camera/camera";
import {LoadingPage} from "../loading/loading";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  constructor(public navCtrl: NavController) {
  }

  public ngOnInit(): void {
  }

  goToCamera(): void {
    this.navCtrl.push(CameraPage);
  }

  goToLoading(): void {
    this.navCtrl.push(LoadingPage);
  }
}
