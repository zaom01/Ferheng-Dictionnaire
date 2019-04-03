import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

import * as firebase from 'firebase';

import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { User } from '../../shared/services/user';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  userInfo: User = {
    uid: '',
    email: '',
    displayName: '',
    photoURL: '',


  };
  errorMessage = '';
  constructor(
     private router: Router, public authService: AuthService, public afAuth: AngularFireAuth, private afs: AngularFirestore
  ) { }
  register(password,email,displayname) {

    firebase.auth().createUserWithEmailAndPassword(email,password)

      .then((user) => {
        this.userInfo.displayName=displayname;
        this.userInfo.email=email;
        this.userInfo.uid = user.user.uid;

        user.user.updateProfile({
          displayName: this.userInfo.displayName,
          photoURL: '',
        }).then(() => {
          // Update successful. Add the user to ..
        }).catch(function (error) {
          console.log(error);
        });
        // added to get correctly the displayName
        this.authService.sign(email,password);
        // update Cloud Firestore
        this.afs.collection('Users/').doc(this.userInfo.uid).set({
          uid: this.userInfo.uid,
          email: this.userInfo.email,
          displayName: this.userInfo.displayName,
          photoURL: this.userInfo.photoURL,


        });
        this.authService.logout();
        this.router.navigate(['verifieremail']);
        this.authService.SendVerificationMail();
        this.authService.SetUserData(user);

      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        this.errorMessage = error.message;
        console.log(this.errorMessage);
        // ...
      });

  }
  ngOnInit() {

  }

}
