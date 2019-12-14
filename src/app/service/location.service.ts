import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  baseUrl = '/api/loc/';
  constructor(private http: HttpClient) { }

  public getNearestCity(lat: number, lng: number): Observable<Coordinates> {
    return this.http.get<Coordinates>(`${this.baseUrl}/${lat}/${lng}`);
  }



}
