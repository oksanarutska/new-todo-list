import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockListComponent } from './block-list/block-list.component';
import { TodoItemsComponent } from './todo-items/todo-items.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BlockListComponent,
    TodoItemsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    BlockListComponent,
    TodoItemsComponent
  ]
 
})
export class TodoListModule { }
