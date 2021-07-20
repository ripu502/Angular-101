import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Mock } from '../Mock';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  private apiUrl: string = "https://jsonplaceholder.typicode.com/todos";
  constructor(private http: HttpClient) { }

  getData(): Observable<Mock[]>{
    return this.http.get<Mock[]>(this.apiUrl);
  }
}
