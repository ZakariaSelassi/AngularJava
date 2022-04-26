import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SumPipe } from './pipe/sum.pipe';



@NgModule({
  declarations: [
    SumPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    FormsModule,
    SumPipe
  ]
})
export class SharedModule { }
