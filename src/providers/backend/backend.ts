import {HttpClient} from '@angular/common/http';
import {EventEmitter, Injectable} from '@angular/core';
import {VisionClient, VisionRequestParams, VisionResponse} from "../../app/app.api";

@Injectable()
export class BackendProvider {
  onLoadingComplete: EventEmitter<VisionResponse> = new EventEmitter<VisionResponse>();

  constructor(public http: HttpClient,
              private visionClient: VisionClient) {
  }

  callBackend(base64image: string): void {
    this.visionClient.visionAnnotate(new VisionRequestParams({imageContent: base64image}))
      .subscribe((visionResponse: VisionResponse) => {
        this.onLoadingComplete.emit(visionResponse)
      }, (err: Error) => {
        console.error(err);
      })
  }
}
