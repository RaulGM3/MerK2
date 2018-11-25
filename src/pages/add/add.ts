import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormControl
} from '@angular/forms';

import { FireProvider } from '../../providers/fire/fire';

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {
  myForm;

  constructor (
    public navCtrl: NavController,
    public navParams: NavParams,
    private fb: FormBuilder,
    private fire: FireProvider
  ) {
    this.myForm = this.fb.group ({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ionViewDidLoad () {}

  onSubmit () {
    this.fire.pushItems (this.myForm.value);
  }

}
