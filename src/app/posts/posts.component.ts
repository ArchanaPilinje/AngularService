import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(public crud : CrudService) { }

  ngOnInit(): void {
    this.crud.getPosts()
    console.log(this.crud.getPosts)
  }

}
