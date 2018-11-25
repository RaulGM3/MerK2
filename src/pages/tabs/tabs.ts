import { Component } from '@angular/core';

import { MarketPage } from '../market/market';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MarketPage;

  constructor() {

  }
}
