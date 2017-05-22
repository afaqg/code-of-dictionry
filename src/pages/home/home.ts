import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {PresentPage} from '../present/present';
import {MenuPage} from '../menu/menu';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
menuPage=MenuPage;
presentPage=PresentPage;

  constructor(public navCtrl: NavController) {

  }

}
