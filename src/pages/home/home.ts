import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Camera, CameraOptions} from "@ionic-native/camera";
import {BackendProvider} from "../../providers/backend/backend";
import {ImageProvider} from "../../providers/image/image";
import {LoadingPage} from "../loading/loading";
import {Base64ToGallery} from "@ionic-native/base64-to-gallery";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  imageSrc: string = '';

  constructor(public navCtrl: NavController,
              private camera: Camera,
              private backendProvider: BackendProvider,
              private imageProvider: ImageProvider,
              private base64ToGallery: Base64ToGallery) {
  }

  public ngOnInit(): void {
  }

  getImageFromCamera(): void {
    const cameraOptions: CameraOptions = {
      quality: 1,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      saveToPhotoAlbum: true,
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
      destinationType: this.camera.DestinationType.DATA_URL,
      quality: 1,
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
    this.base64ToGallery.base64ToGallery(base64Image, {prefix: '_img', mediaScanner: true}).then(
      (res: Response) => {
        console.log('Saved image to gallery ', res)
      },
      (err: Error) => {
        console.log('Error saving image to gallery ', err)
      }
    );

    this.imageProvider.setImage(base64Image);
    console.log("invoking backend function");
    this.backendProvider.callBackend(base64Image);
    this.navCtrl.setRoot(LoadingPage)
  }
}
