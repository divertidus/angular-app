import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  getPost() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')

      /* Con lo siguiente se muestran en consola los datos obtenidos, pra debug mas bien*/
      /*  .pipe(tap(posts => {
         console.log(posts);
       })
       ) */

      /*Esto es equivalente a lo anterior pero mas corto y compacto*/
      .pipe(tap(console.log));
  }
}
