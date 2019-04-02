import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  users = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
    this.database.list('/users').subscribe(res => this.users = res);
  }

}
