import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {PresentPage} from '../present/present';
import {PastPage} from '../past/past';
import {FuturePage} from '../future/future';

/*
  Generated class for the Menu page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {
presentPage=PresentPage;
pastPage=PastPage;
futurePage=FuturePage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
