import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {VisionResponse} from "../../../app/app.api";

@IonicPage()
@Component({
  selector: 'page-text',
  templateUrl: 'text.html',
})
export class TextPage implements OnInit {
  visionResponse: VisionResponse;
  isSpeaking = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.visionResponse = this.navParams.data;
  }

  public ngOnInit(): void {
  }

  readResponse() {
    console.log("were in the function hello");
    if (!this.isSpeaking) {
      console.log("woohoo i was clicked and i am not speaking");
      let utterance = new SpeechSynthesisUtterance(this.visionResponse.text);
      (<any>window).speechSynthesis.speak(utterance);
      this.isSpeaking = true;
    }else{
      console.log("u jus got punked");
      (<any>window).speechSynthesis.cancel();
      this.isSpeaking = false;
    }
  }
}
