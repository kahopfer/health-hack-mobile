import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ResponseModel} from "../../response-model";

@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage implements OnInit {
  responseModel: ResponseModel = null;

  imageRoot = 'ImagePage';
  textRoot = 'TextPage';
  descriptionRoot = 'DescriptionPage';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log("On results page");
    this.responseModel = this.navParams.data.responseModel;
  }

  public ngOnInit(): void {
  }
}
