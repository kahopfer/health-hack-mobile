import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ImagePage} from './image';
import {ZoomAreaModule} from "ionic2-zoom-area";

@NgModule({
  declarations: [
    ImagePage,
  ],
  imports: [
    IonicPageModule.forChild(ImagePage),
    ZoomAreaModule.forRoot(),
  ],
})
export class ImagePageModule {
}
