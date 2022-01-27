import { Injectable } from '@angular/core';
import { Observable, of,throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url ="https://api.publicapis.org/categories"
  constructor(
    private http: HttpClient,
  ) { }
  getData(data?:any) {
    return this.http.get<any[]>(this.url)
      .pipe(
        catchError(this.handleError('updateCartype', []))
      );
  }
  
  async showData() {
    return new Promise((resolve,reject)=>{
      this.getData()
        .subscribe((data: any) => {
          console.log(data)
          return resolve(data)
        });
    });
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); 
      return throwError(error);
    };
  }
}
