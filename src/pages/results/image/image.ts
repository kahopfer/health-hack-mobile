import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {VisionResponse} from "../../../response-model";
import {ImageProvider} from "../../../providers/image/image";

@IonicPage()
@Component({
  selector: 'page-image',
  templateUrl: 'image.html',
})
export class ImagePage implements OnInit {
  visionResponse: VisionResponse;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private imageProvider: ImageProvider) {
    this.visionResponse = this.navParams.data;
  }

  public ngOnInit(): void {
  }

  displayImage(): void {
    this.imageProvider.getImage();
  }
}

