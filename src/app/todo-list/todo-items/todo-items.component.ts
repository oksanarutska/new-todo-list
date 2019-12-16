import { Component, OnInit, Input } from '@angular/core';
import { TodoItems } from '../list-items';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {
  @Input() item: TodoItems;
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }
  toggleClass(){
    this.item.isDone = !this.item.isDone;
  }

}
