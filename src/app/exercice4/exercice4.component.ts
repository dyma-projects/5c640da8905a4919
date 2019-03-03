import { Component, OnInit } from '@angular/core';
import { TextAst } from '@angular/compiler';

@Component({
  selector: 'app-exercice4',
  templateUrl: './exercice4.component.html',
  styleUrls: ['./exercice4.component.css']
})
export class Exercice4Component implements OnInit {

  public texts: Array<string> = new Array<string>();

  constructor() { }

  ngOnInit() {
    this.texts.push('un');
    this.texts.push('deux');
    this.texts.push('trois');
  }

}
