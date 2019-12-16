import { Component, OnInit } from '@angular/core';
import { TodoItems } from '../list-items';

@Component({
  selector: 'app-block-list',
  templateUrl: './block-list.component.html',
  styleUrls: ['./block-list.component.css']
})
export class BlockListComponent implements OnInit {

  description: string = '';
  todoItems: TodoItems[] = [];

  constructor() { }

  ngOnInit() {
  }
  addItem() {
    if (!this.description) {
      return
    }
    const item = new TodoItems();
    item.description = this.description;
    this.todoItems.push(item)
    this.description = ''
  }

  clearDoneItems() {
    this.todoItems = this.todoItems.filter(e => !e.isDone)
  }
}
