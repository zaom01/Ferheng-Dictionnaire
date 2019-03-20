import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RechercheComponent } from './components/recherche/recherche.component';
import { SeconnecterComponent } from './components/seconnecter/seconnecter.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { MotDepasseOublierComponent } from './components/mot-depasse-oublier/mot-depasse-oublier.component';
import { VerifieremailComponent } from './components/verifieremail/verifieremail.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MotComponent } from './components/recherche/mot/mot.component';

import { AuthGuard } from "./shared/guard/auth.guard";
import { SecureinnerpagesGuard } from "./shared/guard/secureinnerpages.guard";



const routes: Routes = [
  {path:'',component:RechercheComponent},
  {path:'seconnecter',component:SeconnecterComponent, canActivate: [SecureinnerpagesGuard]},
  {path:'Inscription',component:InscriptionComponent, canActivate: [SecureinnerpagesGuard]},
  {path:'MotDepasseOublier',component:MotDepasseOublierComponent, canActivate: [SecureinnerpagesGuard]},
  {path:'verifieremail',component:VerifieremailComponent, canActivate: [SecureinnerpagesGuard]},
  {path:'Profile',component:ProfileComponent,canActivate: [AuthGuard]},
  {path:'Mot/:kurde',component:MotComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
