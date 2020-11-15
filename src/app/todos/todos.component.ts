import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
flag:boolean
assignment:any[]
  constructor(public crud : CrudService) { 
    this.flag=true
    
  }

  ngOnInit(): void {
    this.crud.getTodos()
    console.log(this.crud.getTodos)
  }

  

}
