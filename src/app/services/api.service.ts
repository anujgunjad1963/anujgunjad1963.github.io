import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getSidebarMenu() {
    return this.http.get<any>(
      'https://api.jsonbin.io/v3/b/62e03130248d43754f05ef85'
    );
  }
}
