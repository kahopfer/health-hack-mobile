import {HttpClient} from '@angular/common/http';
import {EventEmitter, Injectable} from '@angular/core';
import {VisionClient, VisionRequestParams, VisionResponse} from "../../app/app.api";
import {ToastController} from "ionic-angular";

@Injectable()
export class BackendProvider {
  onLoadingComplete: EventEmitter<VisionResponse> = new EventEmitter<VisionResponse>();

  constructor(public http: HttpClient,
              private visionClient: VisionClient,
              public toastCtrl: ToastController) {
  }

  callBackend(base64image: string): void {
    this.visionClient.visionAnnotate(new VisionRequestParams({imageContent: base64image}))
      .subscribe((visionResponse: VisionResponse) => {
        this.onLoadingComplete.emit(visionResponse)
      }, (err: Error) => {
        console.error(err);
        let toast = this.toastCtrl.create({
          message: err.message,
          duration: 3000,
          position: 'bottom',
          showCloseButton: true
        });
        toast.present();
      })
  }
}
