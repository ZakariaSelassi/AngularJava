import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-binding',
  templateUrl: './demo-binding.component.html',
  styleUrls: ['./demo-binding.component.scss']
})
export class DemoBindingComponent implements OnInit {

  title:string = 'Demo Binding';
  input_value:string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
