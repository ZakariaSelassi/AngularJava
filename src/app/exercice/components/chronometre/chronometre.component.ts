import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chronometre',
  templateUrl: './chronometre.component.html',
  styleUrls: ['./chronometre.component.scss']
})
export class ChronometreComponent implements OnInit {

  isRunning : boolean = false;


  minutes : number = 0;
  seconde : number = 0;
  public title : string ="Chronometre";
  public inter : any
  constructor() { }

  ngOnInit(): void {

  }

  start():void {
    if(!this.isRunning) {

      this.inter =  setInterval(() => {
        this.seconde++;
        if(this.seconde == 60){
          this.seconde = 0;
          this.minutes +=1;
        }
      },1000)
      this.isRunning = true;
    }
  
   
  }

  pause() {
   
    console.log("pause")
    
    clearTimeout(this.inter);
    this.isRunning = false;
  }

  reset() {
 
    this.minutes =0;
    this.seconde = 0;
  }

  
}
