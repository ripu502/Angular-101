import { Component, OnInit } from '@angular/core';
import { MockService } from '../../services/mock.service';
import { Mock } from 'src/app/Mock';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  mockData: Mock[] = [];
  constructor(private mockService: MockService) {
   }

  ngOnInit(): void {
    this.mockService.getData().subscribe((tasks)=> this.mockData=tasks);
  }

  onGetData() {
    console.log(this.mockData);
  }
}
