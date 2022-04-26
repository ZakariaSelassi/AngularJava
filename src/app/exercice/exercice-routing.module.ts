import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChronometreComponent } from './components/chronometre/chronometre.component';
import { ExoHomeComponent } from './components/exo-home/exo-home.component';

const routes: Routes = [

  {path:'', component:ExoHomeComponent},
  {path:'chronometre', component:ChronometreComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciceRoutingModule { }
