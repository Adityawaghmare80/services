import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoManageComponent } from './shared/components/todo-manage/todo-manage.component';
import { TodoListComponent } from './shared/components/todo-list/todo-list.component';
import { TodoFormComponent } from './shared/components/todo-form/todo-form.component';
import { FormsModule } from '@angular/forms';
import { StdFormComponent } from './shared/components/std-form/std-form.component';
import { StdTableComponent } from './shared/components/std-table/std-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoManageComponent,
    TodoListComponent,
    TodoFormComponent,
    StdFormComponent,
    StdTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
