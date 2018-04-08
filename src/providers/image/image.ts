import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ToastController} from "ionic-angular";

/*
  Generated class for the ImageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ImageProvider {
  latestImageBase64 = "";
  cameraPhoto = false;
  constructor(public http: HttpClient,
              public toastCtrl: ToastController) {
  }


  isCamera(wasCamera: boolean): void {
    this.cameraPhoto = wasCamera;
  }

  setImage(base64Image: string): void {
    this.latestImageBase64 = "data:image/jpeg;base64," + base64Image;

  }

  getImage(): string{
    if (this.latestImageBase64 === ""){
      throw "no image found";
    }else{
      // if (this.cameraPhoto) {
      //   let toast = this.toastCtrl.create({
      //     message: "Saved to camera roll!",
      //     duration: 3000,
      //     position: 'top',
      //     showCloseButton: true,
      //     cssClass: "toastCustom"
      //   });
      //   toast.present();
      // }
      return this.latestImageBase64;
    }
  }

}
