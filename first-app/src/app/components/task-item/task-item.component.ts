import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  @Input() userId: string = '';
  @Input() title: string = "abc";
  @Input() completed: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
