import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  constructor(public crud : CrudService) { }

  ngOnInit(): void {
    this.crud.getAlbums()
    console.log(this.crud.albums)
  }

}
