import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartContainerComponent } from './components/cart-container/cart-container.component';
import { TasksComponent } from './components/tasks/tasks.component';

const routes: Routes = [
  { path: '', component: CartContainerComponent },
  { path: 'apidata', component: TasksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
