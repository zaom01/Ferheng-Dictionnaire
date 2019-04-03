import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class CRUDService {

  constructor(
    private firestore: AngularFirestore
  ) { }
  create_NewMot(mot) {
    return this.firestore.collection('Mot').add(mot);
  }

  read_Students() {
    return this.firestore.collection('Mot').snapshotChanges();
  }

  update_Student(motID,mot){
    this.firestore.doc('Mot/' + motID).update(mot);
  }

  delete_Student(mot_id) {
    this.firestore.doc('Mot/' + mot_id).delete();
  }
}
