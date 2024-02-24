import { HttpClient } from '@angular/common/http'; // this should be correc (angular/commom/http)
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs'; // reactive JS
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = "http://local:8080/api/products";
  
  constructor(private httpClient: HttpClient) {
  }
      getProductList(): Observable<Product[]>{
        return  this.httpClient.get<GetResponse>(this.baseUrl)
        .pipe(
          map(response => response._embedded.products)
        );
        ;
      }

   
}

interface GetResponse{
  _embedded: {
    products: Product[];
  }
}
