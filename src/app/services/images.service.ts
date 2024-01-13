import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ImageDTO } from '../models/image.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http: HttpClient) { }

  getAllItems(): Observable<ImageDTO[]> {
    return this.http.get<ImageDTO[]>('https://picsum.photos/v2/list');
  }

  getImageById(id: string): Observable<ImageDTO> {
    return this.http.get<ImageDTO>('http://picsum.photos/id/' + id + '/info');
  }


}
