import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from '../model/Ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  baseUrl = 'localhost:8080/api/ticket/';

  constructor(private http: HttpClient) { }

  public getTicket(no: string): Observable<Ticket> {
    return this.http.get<Ticket>(`${this.baseUrl}/get/${no}`);
  }

}
