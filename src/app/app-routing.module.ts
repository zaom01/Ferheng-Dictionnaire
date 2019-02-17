import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RechercheComponent } from './recherche/recherche.component';


const routes: Routes = [
  {path:'',component:RechercheComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
