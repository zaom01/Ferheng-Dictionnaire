import { Component, OnInit , NgZone} from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-seconnecter',
  templateUrl: './seconnecter.component.html',
  styleUrls: ['./seconnecter.component.css']
})
export class SeconnecterComponent implements OnInit {

  constructor(
    public authService: AuthService,private router: Router,public ngZone: NgZone
  ) { }
seconnecter(email,password){
  firebase.auth().signInWithEmailAndPassword(email,password)
  .then(credential => {
    this.ngZone.run(() => {
      console.log('done');
      this.router.navigate(['Profile' ]);
        });


  }).catch((error) => {
    window.alert(error.message);

  })
}
  ngOnInit() {
  }

}
