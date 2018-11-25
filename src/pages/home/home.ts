import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FireProvider } from '../../providers/fire/fire';

import { AddPage } from '../add/add';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  searchQuery: string = '';
  fullItems;
  items;
  itemsBackup;

  constructor (
    public navCtrl: NavController,
    private fire: FireProvider
  ) {}

  ionViewDidEnter () {
    this.populateItems ();
  }

  populateItems () { //  PONER TODOS LOS QUE NO SEAN neededS
    var arrayItems = new Array ()
    this.fire.getHomeItems ().then (items => {
      this.fullItems = items;
      this.fullItems.forEach (item => {
        arrayItems.push (item.name)
      })
      this.items = arrayItems;
      this.itemsBackup = arrayItems;
    })
  }

  restoreItems () {
    this.items = this.itemsBackup;
  }

  getItems (ev: any) {
    // Reset items back to all of the items
    this.restoreItems ();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim () != '') {
      this.items = this.items.filter ((item) => {
        return (item.toLowerCase ().indexOf (val.toLowerCase ()) > -1);
      })
    }
  }

  onAdd () {
    this.navCtrl.push (AddPage)
  }

  selectItem (item) {
    this.fullItems.forEach (itB => {
      if (itB.name == item) {
        this.fire.itemNeeded (itB);
        this.populateItems ();
      }
    })

  }
}
