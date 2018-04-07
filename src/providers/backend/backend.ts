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
    setTimeout(
      (): void => {
        this.onLoadingComplete.emit(new ResponseModel())
      },
      3000
    );
  }
}
