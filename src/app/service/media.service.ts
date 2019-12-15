import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Media } from '../model/Media';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  baseUrl = 'api/media';
  constructor(private http: HttpClient) { }

  public filterByGenre(genre: string): Observable<Media[]> {
    return this.http.get<Media[]>(`${this.baseUrl}/genre/${genre}`);
  }

  public filterByType(type: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/type/${type}`);
  }

  public findMediaByName(name: string): Observable<Media> {
    return this.http.get<Media>(`name/${name}`);
  }
}
