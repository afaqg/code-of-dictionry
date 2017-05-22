import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {PaiPage} from '../pai/pai';
import {PacPage} from '../pac/pac';
import {PapPage} from '../pap/pap';
import {PapcPage} from '../papc/papc';

/*
  Generated class for the Past page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-past',
  templateUrl: 'past.html'
})
export class PastPage {
paiPage=PaiPage;
pacPage=PacPage;
papPage=PapPage;
papcPage=PapcPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PastPage');
  }

}
