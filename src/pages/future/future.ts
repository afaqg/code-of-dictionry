import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {FiPage} from '../fi/fi';
import {FcPage} from '../fc/fc';
import {FpPage} from '../fp/fp';
import {FpcPage} from '../fpc/fpc';

/*
  Generated class for the Future page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-future',
  templateUrl: 'future.html'
})
export class FuturePage {
fiPage=FiPage;
fcPage=FcPage;
fpPage=FpPage;
fpcPage=FpcPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FuturePage');
  }

}
