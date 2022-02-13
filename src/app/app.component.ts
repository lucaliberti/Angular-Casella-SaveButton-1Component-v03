import { Component , ElementRef, ViewChild  } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  testo_salvato:string="(ancora nulla)"
  @ViewChild('inputCasella') htmlInputCasella: ElementRef;  
  constructor() {}


  onClick3() {
    console.log(this.htmlInputCasella)
    this.testo_salvato=this.htmlInputCasella.nativeElement.value;
  }













  

 /*
  onClick1(htmlInput:HTMLInputElement) {
    console.log(htmlInput)
    this.testo_salvato=htmlInput.value 
  }

  onClick2( val:string) {
    console.log(val)
    this.testo_salvato=val 
  }
  */




}


