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
  img: any;
  h: number = 200;
  w: number = 200;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private imageProvider: ImageProvider,
              private domSanitizationService: DomSanitizer) {
    this.visionResponse = this.navParams.data;
  }

  public ngOnInit(): void {
    this.base64Image = this.imageProvider.getImage();
    setTimeout(
      (): void => {
        this.img = document.getElementById("img");
        console.log(JSON.stringify(this.img.style));
        // this.h = Number(this.img.style.height);
        // this.w = Number(this.img.style.width);
      },
      500
    );
  }

  zoomIn(): void {
    console.log("yolo " + this.h + ", " + this.w);
    this.h = Math.ceil(this.h * 1.1);
    this.w = Math.ceil(this.w * 1.1);
    // this.img.style.height = this.h + "px";
    // this.img.style.width = this.w + 'px';
  }

  zoomOut(): void {
    console.log("yolo " + this.h + ", " + this.w);
    this.h = Math.ceil(this.h / 1.1);
    this.w = Math.ceil(this.w / 1.1);
    // this.img.style.height = this.h + "px";
    // this.img.style.width = this.w + 'px';
    console.log("hehe");
  }


}

