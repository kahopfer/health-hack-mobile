import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {VisionResponse} from "../../../response-model";
import {ImageProvider} from "../../../providers/image/image";
import {DomSanitizer} from "@angular/platform-browser";

@IonicPage()
@Component({
  selector: 'page-image',
  templateUrl: 'image.html',
})
export class ImagePage implements OnInit {
  visionResponse: VisionResponse;
  base64Image: string;
  showControls: boolean = true;
  scale: number = 1;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private imageProvider: ImageProvider,
              private domSanitizationService: DomSanitizer) {
    this.visionResponse = this.navParams.data;
  }

  public ngOnInit(): void {
      this.base64Image = this.imageProvider.getImage();
  }

}

