import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppCartComponent } from './components/app-cart/app-cart.component';
import { CartContainerComponent } from './components/cart-container/cart-container.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { TwoBindComponent } from './components/two-bind/two-bind.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NameEditorComponent } from './components/name-editor/name-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    AppCartComponent,
    CartContainerComponent,
    TasksComponent,
    TaskItemComponent,
    TwoBindComponent,
    NameEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
