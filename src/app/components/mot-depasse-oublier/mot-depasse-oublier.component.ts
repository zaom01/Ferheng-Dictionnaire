import { Component, OnInit, NgZone} from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { Router } from '@angular/router';
import * as firebase from 'firebase';
@Component({
  selector: 'app-mot-depasse-oublier',
  templateUrl: './mot-depasse-oublier.component.html',
  styleUrls: ['./mot-depasse-oublier.component.css']
})
export class MotDepasseOublierComponent implements OnInit {

  constructor(
    public authService: AuthService,private router: Router,public ngZone: NgZone
  ) { }
  resetemail(email,password){
    firebase.auth().sendPasswordResetEmail(email)
    .then(credential => {
      this.ngZone.run(() => {
        window.alert('Password reset email sent, check your inbox.');
        this.router.navigate(['seconnecter']);
          });


    }).catch((error) => {
      window.alert(error.message);

    })
  }
  ngOnInit() {
  }

}
