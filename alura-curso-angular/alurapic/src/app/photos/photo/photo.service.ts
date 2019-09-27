import { HttpClient } from "@angular/common/http";

export class PhotoService {
  constructor(private http: HttpClient) {}

  listFromUser(userName: string) {
    this.http.get<Object[]>('http://localhost:3000/flavio/photos')
  }
}
