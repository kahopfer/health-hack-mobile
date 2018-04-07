import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HomePage} from "../home/home";
import {VisionResponse} from "../../app/app.api";

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

  goHome(): void {
    this.navCtrl.setRoot(HomePage);
  }
}
