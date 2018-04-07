import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage implements OnInit {
  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
  }

  public ngOnInit(): void {
  }
}
