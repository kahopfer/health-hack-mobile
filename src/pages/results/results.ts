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
    this.visionResponse = this.navParams.data.visionResponse;
    // this.visionResponse = new VisionResponse({text: "This is example text.", labels: []})
  }

  public ngOnInit(): void {
  }

  goHome(): void {
    this.navCtrl.setRoot(HomePage);
  }
}
