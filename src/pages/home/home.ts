import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  posts: any = [];

  constructor(public navCtrl: NavController, private http: HttpClient) {
    this.http.get('https://jsonplaceholder.typicode.com/posts/').subscribe(res => {
      this.posts = res;
    });
  }

}
