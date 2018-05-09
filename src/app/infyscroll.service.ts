import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { HttpModule } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/take';

@Injectable()
export class InfyscrollService {
	_done = new BehaviorSubject(false);
	_loading = new BehaviorSubject(false);
	_data = new BehaviorSubject([]);
	data: Observable<any>;
	done: Observable<boolean> = this._done.asObservable();
	loading: Observable<boolean> = this._loading.asObservable();

	constructor(private afs: AngularFirestore) { }


	initilizer() {
		const newBatch = this.afs.collection('news', ref => {
			return ref
			.orderBy('rank', 'desc')
			.limit(4)
		})

		this.Update(newBatch)

		this.data = this._data.asObservable()
		.scan( (acc, val) => {
			return  acc.concat(val);
		})
	}

	nextBatch() {
		const LastDoc = this.lastDoc()
		const newData = this.afs.collection('news', val => {
			return val
			.orderBy('rank','desc')
			.limit(2)
			.startAfter(LastDoc)
		})
		this.Update(newData)
	}
	private lastDoc() {
		const current = this._data.value
		if (current.length) {
			return current[current.length - 1].doc;
		}
		return null
	}
	private Update(docc: AngularFirestoreCollection<any>) {

		if (this._done.value || this._loading.value) { return };
		this._loading.next(true)
		return docc.snapshotChanges()
		.do(arr => {
			let values = arr.map(snap => {
				const data = snap.payload.doc.data()
				const doc = snap.payload.doc
				return { ...data, doc }
			})
			this._data.next(values)
			this._loading.next(false)
			if (!values.length) {
				this._done.next(true)
			}
		})
		.take(1)
		.subscribe()
	}
}