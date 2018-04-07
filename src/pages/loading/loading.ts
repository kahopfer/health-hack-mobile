import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {BackendProvider} from "../../providers/backend/backend";
import {ResponseModel} from "../../response-model";
import {ResultsPage} from "../results/results";

@IonicPage()
@Component({
  selector: 'page-loading',
  templateUrl: 'loading.html',
})
export class LoadingPage implements OnInit {
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public backendProvider: BackendProvider) {
    this.backendProvider.onLoadingComplete.subscribe(
      (responseModel: ResponseModel): void => {
        this.navCtrl.setRoot(ResultsPage, {responseModel: responseModel});
      }
    );
  }

  public ngOnInit(): void {
  }
}
