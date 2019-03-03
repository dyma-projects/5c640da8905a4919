import { Component, OnInit } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  public interpolation: string;
  public textEvent: string;
  public valueInput: string;

  constructor() { }

  ngOnInit() {
    this.interpolation = 'Je suis une interpolation de variables';
    this.valueInput = 'Liaison attribut';
  }

  clickEvent() {
    this.textEvent = "Yes ! J'ai fait une liaison evenement !";
  }

}
