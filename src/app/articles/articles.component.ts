import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClientModule } from '@angular/common/http'; import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/take';
export interface Item { rank: string;
	text: string;
	url: string;
 }
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  save: string;
  constructor(public route: ActivatedRoute, public af: AngularFirestore) { 
   this.route.params.subscribe(res => this.save = res.id);
    this.itemsCollection = af.collection('news', ref => ref.where('rank', '==', this.save));
    this.items = this.itemsCollection.valueChanges();
    }
  
  ngOnInit() {
  }

}
