import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ImageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ImageProvider {
  latestImageBase64 = "";
  constructor(public http: HttpClient) {
    console.log('Hello ImageProvider Provider');
  }

  setImage(base64image: string): void {
    this.latestImageBase64 = this.latestImageBase64;
  }

  getImage(): void {
    if (this.latestImageBase64 = ""){

    }else{

    }
  }

}
