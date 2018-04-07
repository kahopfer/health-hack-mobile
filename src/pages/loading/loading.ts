import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {BackendProvider} from "../../providers/backend/backend";
import {ResultsPage} from "../results/results";
import {VisionResponse} from "../../app/app.api";

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
      (visionResponse: VisionResponse): void => {
        this.navCtrl.setRoot(ResultsPage, {visionResponse: visionResponse});
      }
    );
  }

  public ngOnInit(): void {
  }
}
