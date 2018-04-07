import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {VisionResponse} from "../../../response-model";

@IonicPage()
@Component({
  selector: 'page-image',
  templateUrl: 'image.html',
})
export class ImagePage implements OnInit {
  visionResponse: VisionResponse;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.visionResponse = this.navParams.data;
  }

  public ngOnInit(): void {
  }
}
