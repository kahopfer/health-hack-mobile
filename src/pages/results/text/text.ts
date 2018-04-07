import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {VisionResponse} from "../../../response-model";

@IonicPage()
@Component({
  selector: 'page-text',
  templateUrl: 'text.html',
})
export class TextPage implements OnInit {
  visionResponse: VisionResponse;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.visionResponse = this.navParams.data;
  }

  public ngOnInit(): void {
  }
}
