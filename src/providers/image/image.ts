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

  setImage(base64Image: string): void {
    this.latestImageBase64 = "data:image/jpeg;base64," + base64Image;

  }

  getImage(): string{
    if (this.latestImageBase64 === ""){
      throw "no image found";
    }else{
      return this.latestImageBase64;
    }
  }

}
