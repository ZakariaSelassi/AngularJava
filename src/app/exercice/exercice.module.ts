import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciceRoutingModule } from './exercice-routing.module';
import { ExoHomeComponent } from './components/exo-home/exo-home.component';
import { SharedModule } from '../shared/shared.module';
import { ChronometreComponent } from './components/chronometre/chronometre.component';
import { ChronoViewPipe } from './pipes/chrono-view.pipe';


@NgModule({
  declarations: [
    ExoHomeComponent,
    ChronometreComponent,
    ChronoViewPipe
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule,
    SharedModule
  ]
})
export class ExerciceModule { }
