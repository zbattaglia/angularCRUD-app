import { Injectable } from '@angular/core';
// for making Http requests
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseURL = 'http://localhost:8080/api/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private httpClient: HttpClient ) { }

  // the following are all http methods
  
  readAll(): Observable<any> {
    return this.httpClient.get( baseURL );
  }

  read( id ): Observable<any> {
    return this.httpClient.get( `${ baseURL }/${ id }`);
  }

  create( data ): Observable<any> {
    return this.httpClient.post( baseURL, data );
  }

  update( id, data ): Observable<any> {
    return this.httpClient.put( `${ baseURL }/${ id }`, data );
  }

  delete( id ): Observable<any> {
    return this.httpClient.delete( `${ baseURL }/${ id }` );
  }

  deleteAll(): Observable<any> {
    return this.httpClient.delete( baseURL );
  }

  searchByName( name: String ): Observable<any> {
    return this.httpClient.get( `${ baseURL }?name=${ name }` );
  }
}
