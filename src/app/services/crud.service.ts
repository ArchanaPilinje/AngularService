import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  users:any[]
  selectedUser:any
  posts:any[]
  todos:any[]
  albums:any[]
  constructor(public http :HttpClient) {}
  getUsers()
  {
    this.http.get( "https://jsonplaceholder.typicode.com/users").subscribe((data:any[]) => this.users = data)
  }
  getPosts()
  {
    this.http.get( "https://jsonplaceholder.typicode.com/users/"+this.selectedUser.id+'/posts').subscribe((data:any[]) => this.posts = data)
  }

  getTodos()
  {
    this.http.get( "https://jsonplaceholder.typicode.com/users/"+this.selectedUser.id+'/todos').subscribe((data:any[]) => this.todos = data)
  }

  getAlbums()
  {
    this.http.get( "https://jsonplaceholder.typicode.com/users/"+this.selectedUser.id+'/albums').subscribe((data:any[]) => this.albums = data)
  }

}