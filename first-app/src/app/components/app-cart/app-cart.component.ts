import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-app-cart',
  templateUrl: './app-cart.component.html',
  styleUrls: ['./app-cart.component.scss']
})
export class AppCartComponent implements OnInit {

  @Input() title: string = "yello";
  description: string = "Some quick example text to build on the card title and make up the bulk of the card's content. 1";
  @Output() titleChanger: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    // this.title = this.title === 'yello' ? 'Hello' : 'yello';
    this.titleChanger.emit(this.title);
  }
}
