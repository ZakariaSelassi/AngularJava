import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoBindingComponent } from './components/demo-binding/demo-binding.component';
import { DemoHomeComponent } from './components/demo-home/demo-home.component';
import { DemoPipeComponent } from './components/demo-pipe/demo-pipe.component';

const routes: Routes = [
  {path:'', component:DemoHomeComponent},
  {path:'binding',component:DemoBindingComponent},
  {path:'pipe',component:DemoPipeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
