import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage implements OnInit {
  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private camera: Camera) {
  }

  public ngOnInit(): void {
    const cameraOptions: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(cameraOptions).then(
      (imageData: string): void => {
        let base64Image = 'data:image/jpeg;base64,' + imageData;
      }, (error: Error): void => {
        console.error(error);
      }
    );
  }
}
