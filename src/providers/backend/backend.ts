import {HttpClient} from '@angular/common/http';
import {EventEmitter, Injectable} from '@angular/core';
import {ResponseModel} from "../../response-model";

@Injectable()
export class BackendProvider {
  onLoadingComplete: EventEmitter<ResponseModel> = new EventEmitter<ResponseModel>();

  constructor(public http: HttpClient) {
  }

  callBackend(base64image: string): void {
    // TODO: Create actual implementation lol.
    console.log("Timing...")
    setTimeout(
      (): void => {
        console.log("Timeout done")
        this.onLoadingComplete.emit(new ResponseModel())
      },
      3000
    );
  }
}
