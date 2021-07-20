import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-container',
  templateUrl: './cart-container.component.html',
  styleUrls: ['./cart-container.component.scss']
})
export class CartContainerComponent implements OnInit {

  title: string = "Hello";

  constructor() { }

  ngOnInit(): void {
  }
  changeTitle(title: string) {
      this.title = this.title === 'Hello' ? 'Yello' : 'Hello';
  }
}
