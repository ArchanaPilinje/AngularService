import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public crud : CrudService) {

   }

  ngOnInit(): void {
    this.crud.getUsers()
  }
  selectUser(index)
  {
    this.crud.selectedUser=this.crud.users[index]
    console.log(this.crud.selectedUser)
  }

}
