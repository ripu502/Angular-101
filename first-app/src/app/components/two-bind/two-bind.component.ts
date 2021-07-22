import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-bind',
  templateUrl: './two-bind.component.html',
  styleUrls: ['./two-bind.component.scss']
})
export class TwoBindComponent implements OnInit {

  name: string = 'ripudaman';
  
  constructor() { }

  ngOnInit(): void {
  }

}
