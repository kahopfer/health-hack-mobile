import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {CameraPage} from "../camera/camera";
import {LoadingPage} from "../loading/loading";
import {Camera} from "@ionic-native/camera";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  imageSrc: string = '';
  constructor(public navCtrl: NavController,
              private camera: Camera) {
  }

  public ngOnInit(): void {
  }

  goToCamera(): void {
    this.navCtrl.push(CameraPage);
  }

  goToLoading(): void {
    this.navCtrl.push(LoadingPage);
  }

  openGallery (): void {
    let cameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI,
      quality: 100,
      targetWidth: 1000,
      targetHeight: 1000,
      encodingType: this.camera.EncodingType.JPEG,
      correctOrientation: true
    };

    this.camera.getPicture(cameraOptions)
      .then(file_uri => this.imageSrc = file_uri,
        err => console.log(err));
  }
}
