import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Album, Photo } from './models';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private client: HttpClient) { }
  getAlbums(): Observable<Album[]> {
    let val = this.client.get<Album[]>("https://jsonplaceholder.typicode.com/albums");    
    return val;
  }
  getAlbum(categ: string): Observable<Photo[]> {
    return this.client.get<Photo[]>(`https://jsonplaceholder.typicode.com/albums/1/photos`);
  }
  getAlbumItem(id: any): Observable<Photo>{
    return this.client.get<Photo>("https://jsonplaceholder.typicode.com/photos/"+id);
  }
  deleteItem(id: any): Observable<any>{
    return this.client.delete("https://jsonplaceholder.typicode.com/photos/"+id);
  }
  updateItem(item: Photo): Observable<Photo> {
    return this.client.put<Photo>("https://jsonplaceholder.typicode.com/photos/"+item.id,item);
  }
  createItem(item: Photo): Observable<Photo> {
    return this.client.post<Photo>(`https://jsonplaceholder.typicode.com/photos`,item);
  }
  
}
