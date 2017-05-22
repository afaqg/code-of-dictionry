import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {PiPage} from '../pi/pi';
import {PcPage} from '../pc/pc';
import {PpPage} from '../pp/pp';
import {PpcPage} from '../ppc/ppc';

/*
  Generated class for the Present page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-present',
  templateUrl: 'present.html'
})
export class PresentPage {
piPage=PiPage;
pcPage=PcPage;
ppPage=PpPage;
ppcPage=PpcPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PresentPage');
  }

}
