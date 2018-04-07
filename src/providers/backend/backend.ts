import {HttpClient} from '@angular/common/http';
import {EventEmitter, Injectable} from '@angular/core';
import {VisionResponse, WebDetectionResponse} from "../../response-model";

@Injectable()
export class BackendProvider {
  onLoadingComplete: EventEmitter<VisionResponse> = new EventEmitter<VisionResponse>();

  constructor(public http: HttpClient) {
  }

  callBackend(base64image: string): void {
    setTimeout(
      (): void => {
        this.onLoadingComplete.emit(new VisionResponse(
          "this is the text my dude",
          [
            new WebDetectionResponse(
              80,
              "description1"
            ),
            new WebDetectionResponse(
              90,
              "description2"
            ),
            new WebDetectionResponse(
              20,
              "description3"
            ),
          ]
        ))
      },
      3000
    );
  }
}
