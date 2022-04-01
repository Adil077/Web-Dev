import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { Album, Photo } from '../models';
import {Location} from '@angular/common';
@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {
  creating: boolean= false;
  newTitle: string = "";
  newUrl: string = "";
  album: Photo[] = [];
  loaded: boolean = false;
  albId: Number = -1;
  constructor( private route: ActivatedRoute, private service: AlbumsService, private _location: Location) { 
    
  }
  addItem(){
    this.loaded = false;
    const item = {
      id: 501,
      url:"https://via.placeholder.com/600/92c952",
      title: this.newTitle,
      thumbnailUrl: this.newUrl,
      albumId: this.albId,
    }
    this.service.createItem(item as Photo).subscribe((item)=>{
      this.album.push(item);
      this.creating = false;
      this.loaded = true;
      this.newTitle = "";
      this.newUrl = "";
    })
  }
  back(){
    this._location.back();
  }
  deleteItem(id: any){
    this.album = this.album.filter((x)=> x.id != id );
    this.service.deleteItem(id).subscribe(()=>{
      console.log("deleted");
    });
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      const categ = params.get("title");
      this.loaded = false;
      if(categ){
        this.albId = parseInt(categ);
        this.service.getAlbum(categ).subscribe((album)=>{
          this.album = album;
          this.loaded = true;
        })
      }
    });
  }

}
