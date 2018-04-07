import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Camera, CameraOptions} from "@ionic-native/camera";
import {BackendProvider} from "../../providers/backend/backend";
import {ImageProvider} from "../../providers/image/image";
import {LoadingPage} from "../loading/loading";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  imageSrc: string = '';

  constructor(public navCtrl: NavController,
              private camera: Camera,
              private backendProvider: BackendProvider,
              private imageProvider: ImageProvider) {
  }

  public ngOnInit(): void {
  }

  getImageFromCamera(): void {
    const cameraOptions: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(cameraOptions).then(
      this.sendToBackend.bind(this),
      (error: Error): void => {
        console.error(error);
      }
    );
  }

  getImageFromGallery(): void {
    const cameraOptions: CameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI,
      quality: 100,
      targetWidth: 1000,
      targetHeight: 1000,
      encodingType: this.camera.EncodingType.JPEG,
      correctOrientation: true
    };

    this.camera.getPicture(cameraOptions).then(
      this.sendToBackend.bind(this),
      (error: Error): void => {
        console.error(error);
      }
    );
  }

  sendToBackend(base64Image: string) {
    this.imageProvider.setImage(base64Image);
    this.backendProvider.callBackend(base64Image);
    this.navCtrl.setRoot(LoadingPage)
  }
}
