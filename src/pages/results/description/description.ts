import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {LabelAnnotationsItemType, VisionResponse} from "../../../app/app.api";

@IonicPage()
@Component({
  selector: 'page-description',
  templateUrl: 'description.html',
})
export class DescriptionPage implements OnInit {
  visionResponse: VisionResponse;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.visionResponse = this.navParams.data;
    this.visionResponse.labels.forEach(function (label) {
      label.score = Math.round(label.score * 100 * 100) / 100
    });
  }

  public ngOnInit(): void {
  }

  public readLabels(): void {
    this.visionResponse.labels.forEach(
      (label: LabelAnnotationsItemType): void => {
        (<any>window).speechSynthesis.speak(new SpeechSynthesisUtterance(label.description + ", " + label.score + "% sure."));
      }
    );
  }
}
