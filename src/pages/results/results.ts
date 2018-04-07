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

  imageRoot = 'ImagePage';
  textRoot = 'TextPage';
  descriptionRoot = 'DescriptionPage';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log("On results page");
    this.visionResponse = this.navParams.data.visionResponse;
  }

  public ngOnInit(): void {
  }
}
