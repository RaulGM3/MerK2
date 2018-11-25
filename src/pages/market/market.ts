import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FireProvider } from '../../providers/fire/fire';

@IonicPage()
@Component({
  selector: 'page-market',
  templateUrl: 'market.html',
})
export class MarketPage {
  items;

  constructor(
    public navCtrl: NavController,
    private fire: FireProvider
  ) {}

  ionViewDidEnter () {
    this.populateItems ();
  }

  populateItems () { //  PONER TODOS LOS QUE NO SEAN neededS
    this.fire.getMarketItems ().then (items => {
      this.items = items;
    })
  }

  selectItem (item) {
    this.fire.itemBought (item);
    this.populateItems ();
  }
}
