import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MenuPage } from '../pages/menu/menu';
import { PastPage } from '../pages/past/past';
import { PaiPage } from '../pages/pai/pai';
import { PacPage } from '../pages/pac/pac';
import { PapPage } from '../pages/pap/pap';
import { PapcPage } from '../pages/papc/papc';
import { FuturePage } from '../pages/future/future';
import { FiPage } from '../pages/fi/fi';
import { FcPage } from '../pages/fc/fc';
import { FpPage } from '../pages/fp/fp';
import { FpcPage } from '../pages/fpc/fpc';

import { PresentPage } from '../pages/present/present';
import { PiPage } from '../pages/pi/pi';
import { PcPage } from '../pages/pc/pc';
import { PpPage } from '../pages/pp/pp';
import { PpcPage } from '../pages/ppc/ppc';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
	MenuPage,
	PresentPage,
	FuturePage,
	FiPage,
	FcPage,
	FpPage,
	FpcPage,
	PastPage,
	PiPage,
	PcPage,
	PpPage,
	PpcPage,
	PaiPage,
	PacPage,
	PapPage,
	PapcPage
	
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
	PiPage,
	PcPage,
	PpPage,
	PpcPage,
    ContactPage,
    HomePage,
    TabsPage,
	MenuPage,
	PresentPage,
	FuturePage,
	FiPage,
	FcPage,
	FpPage,
	FpcPage,
	PastPage,
	PaiPage,
	PacPage,
	PapPage,
	PapcPage

  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
