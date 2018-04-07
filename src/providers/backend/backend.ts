import {HttpClient} from '@angular/common/http';
import {EventEmitter, Injectable} from '@angular/core';
import {VisionResponse, WebDetectionResponse} from "../../app/app.api";

@Injectable()
export class BackendProvider {
  onLoadingComplete: EventEmitter<VisionResponse> = new EventEmitter<VisionResponse>();

  constructor(public http: HttpClient) {
  }

  callBackend(base64image: string): void {
    setTimeout(
      (): void => {
        this.onLoadingComplete.emit(new VisionResponse({
            text: "this is the text my dude",
            webDetect: [
              new WebDetectionResponse({
                score: 80,
                description: "description1"
              })
            ]
          })
        )
      },
      3000
    );
  }
}
