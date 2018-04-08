import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { SwaggerException, VisionClient, VisionRequestParams, VisionResponse } from '../../app/app.api';

@Injectable()
export class BackendProvider {
    onLoadingComplete: EventEmitter<VisionResponse> = new EventEmitter<VisionResponse>();
    onError: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(public http: HttpClient,
                private visionClient: VisionClient,
                public toastCtrl: ToastController) {
    }

    callBackend(base64image: string): void {
        this.visionClient.visionAnnotate(new VisionRequestParams({imageContent: base64image}))
            .subscribe((visionResponse: VisionResponse) => {
                this.onLoadingComplete.emit(visionResponse);
                this.onError.emit(false);
            }, (error: SwaggerException) => {
                console.error(error);
                const errMsg = JSON.parse(error.response) ? JSON.parse(error.response).error : 'An unexpected error occurred';
                this.onError.emit(true);
                let toast = this.toastCtrl.create({
                    message: errMsg,
                    duration: 3000,
                    position: 'bottom',
                    showCloseButton: true
                });
                toast.present();
            });
    }

    private a(): void {
      this.http.post("", {}, {}).subscribe(
        (): void => {

        }
      );
    }
}
