import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {VisionResponse} from "../../response-model";

@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage implements OnInit {
  visionResponse: VisionResponse = null;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.visionResponse = this.navParams.data.visionResponse;
  }

  public ngOnInit(): void {
  }
}
