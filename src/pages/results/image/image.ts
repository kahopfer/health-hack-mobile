import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ImageProvider} from "../../../providers/image/image";
import {DomSanitizer} from "@angular/platform-browser";
import {VisionResponse} from "../../../app/app.api";
declare let $: any;

@IonicPage()
@Component({
  selector: 'page-image',
  templateUrl: 'image.html',
})
export class ImagePage implements OnInit {
  visionResponse: VisionResponse;
  base64Image: string;
  currentZoom = 1;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private imageProvider: ImageProvider,
              private domSanitizationService: DomSanitizer) {
    this.visionResponse = this.navParams.data;
  }

  public ngOnInit(): void {
      this.base64Image = this.imageProvider.getImage();
  }

  zoomIn(): void {
    console.log("yolo");
    $('.image').animate({ 'zoom': this.currentZoom += .1 }, 'slow');
    console.log("hehe");
  }

  zoomOut(): void {
    $('#divName').animate({ 'zoom': this.currentZoom -= .1 }, 'slow');
  }


}

