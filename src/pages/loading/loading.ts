import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-loading',
  templateUrl: 'loading.html',
})
export class LoadingPage implements OnInit {
  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
  }

  public ngOnInit(): void {
  }
}
