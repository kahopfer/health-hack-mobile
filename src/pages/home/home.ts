import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {CameraPage} from "../camera/camera";

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
}
