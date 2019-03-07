import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// App routing modules
import { AppRoutingModule } from './app-routing.module';
//component
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RechercheComponent } from './components/recherche/recherche.component';
import { SeconnecterComponent } from './components/seconnecter/seconnecter.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { MotDepasseOublierComponent } from './components/mot-depasse-oublier/mot-depasse-oublier.component';
import { VerifieremailComponent } from './components/verifieremail/verifieremail.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MotComponent } from './components/recherche/mot/mot.component';
// Firebase services + enviorment module
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
// Auth service
import { AuthService } from "./shared/services/auth.service";







@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RechercheComponent,
    SeconnecterComponent,
    InscriptionComponent,
    MotDepasseOublierComponent,
    VerifieremailComponent,
    ProfileComponent,
    MotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
