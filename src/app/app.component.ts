import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';
import { MenuPage } from '../pages/menu/menu';
import {PresentPage} from '../present/present';
import {PiPage} from '../pi/pi';
import {PcPage} from '../pc/pc';
import {PpPage} from '../pp/pp';
import {PpcPage} from '../ppc/ppc';
import {PastPage} from '../past/past';
import {PaiPage} from '../pai/pai';
import {PacPage} from '../pac/pac';
import {PapPage} from '../pap/pap';
import {PapcPage} from '../papc/ppc';
import {FuturePage} from '../future/future';
import {FiPage} from '../fi/fi';
import {FcPage} from '../fc/fc';
import {FpPage} from '../fp/fp';
import {FpcPage} from '../fpc/fpc';
import {HomePage} from '..pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
