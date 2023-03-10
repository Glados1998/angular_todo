import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { TodoItemModule } from './todo-item/todo-item.module';
import {TodoEditorModule} from "./todo-editor/todo-editor.module";
import { TodoFormModule } from './todo-form/todo-form.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NoopAnimationsModule,
    MatDialogModule,
    TodoItemModule,
    TodoEditorModule,
    TodoFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
