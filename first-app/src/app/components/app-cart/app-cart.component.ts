import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-cart',
  templateUrl: './app-cart.component.html',
  styleUrls: ['./app-cart.component.scss']
})
export class AppCartComponent implements OnInit {

  title: string = "Card title";
  description: string = "Some quick example text to build on the card title and make up the bulk of the card's content. 1";
  
  constructor() { }

  ngOnInit(): void {
  }

}