import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class InputService {

  constructor(private http: Http) {}

  getNames() {
    return this.http.get('/api/name').map(response => response.json());
  }

  addName(name){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post("/api/name", JSON.stringify(name), { headers: headers }).map(response => response.json());
  }

  removeName(id) {
    return this.http.delete("/api/name/"+ id)
    .map(response => response.json());
  }


}
