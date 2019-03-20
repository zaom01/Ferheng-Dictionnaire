import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';




@Injectable({
  providedIn: 'root'
})

export class FirebaseService {
db: any;
  constructor() {
  this.db = firebase.firestore();
   }
   getWordData(key) {
       
       return this.db.collection(key + '/').get();

     }
}
