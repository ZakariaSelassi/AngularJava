import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoHomeComponent } from '../demo/components/demo-home/demo-home.component';
import { DemoBindingComponent } from './components/demo-binding/demo-binding.component';
import { FormsModule } from '@angular/forms';
import { DemoPipeComponent } from './components/demo-pipe/demo-pipe.component';
import { AveragePipe } from './pipes/average.pipe';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DemoHomeComponent,
    DemoBindingComponent,
    DemoPipeComponent,
    AveragePipe
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    SharedModule
  ]
})
export class DemoModule { }
