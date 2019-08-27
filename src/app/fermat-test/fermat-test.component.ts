import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fermat-test',
  templateUrl: './fermat-test.component.html',
  styleUrls: ['./fermat-test.component.css']
})
export class FermatTestComponent implements OnInit {
  versuchskaninchen: number = 13;

  anzahl: number = 5;

  ergebnis = 'noch nicht berechnet';

 constructor() { }

 fermattest() {
   let zeuge = 2;
   //Berechne zeuge^(versuchskaninchen-1) modulo versuchskaninchen
   let zwischenergebnis = 1;
   for (let i = 0; i < this.versuchskaninchen-1; i++) {

   zwischenergebnis = zwischenergebnis * zeuge
   }
  this.ergebnis = 'zwischenergebnis: ' + zwischenergebnis
 }


  ngOnInit() {
  }

}