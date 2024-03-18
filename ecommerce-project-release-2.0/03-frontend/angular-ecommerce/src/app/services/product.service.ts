import { HttpClient } from '@angular/common/http'; // this should be correc (angular/commom/http)
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs'; // reactive JS
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = "http://localhost:8080/api/products"; // ENDPoint for products 
  
  constructor(private httpClient: HttpClient) {
  }

  getProductList(theCategoryId: number): Observable<Product[]>{

        // build  URL based on category id 

        const  searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;

        console.log(`Search URL =${searchUrl}`);
        return  this.httpClient.get<GetResponse>(searchUrl)
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
