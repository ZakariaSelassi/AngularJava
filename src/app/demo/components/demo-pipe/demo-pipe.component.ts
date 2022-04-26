import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-pipe',
  templateUrl: './demo-pipe.component.html',
  styleUrls: ['./demo-pipe.component.scss']
})
export class DemoPipeComponent implements OnInit {

  public title : string = "Demo Pipe";
  public today : Date = new Date();
  public price : number = 499.99;
  public prices : number[] = [1.2,2.3,3.4,4.5];
  
  constructor() { }

  ngOnInit(): void {
  }

}
