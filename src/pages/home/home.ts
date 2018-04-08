import { Component, OnInit } from '@angular/core';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { NavController } from 'ionic-angular';
import { BackendProvider } from '../../providers/backend/backend';
import { ImageProvider } from '../../providers/image/image';
import { LoadingPage } from '../loading/loading';

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
            mediaType: this.camera.MediaType.PICTURE,
        };

        this.imageProvider.isCamera(true);
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

        this.imageProvider.isCamera(false);
        this.camera.getPicture(cameraOptions).then(
            this.sendToBackend.bind(this),
            (error: Error): void => {
                console.error(error);
            }
        );
    }

    sendToBackend(base64Image: string) {
        console.log('invoking backend function');
        this.imageProvider.setImage(base64Image);
        console.log('invoking backend function');
        this.backendProvider.callBackend(base64Image);
        this.navCtrl.setRoot(LoadingPage);
    }
}
