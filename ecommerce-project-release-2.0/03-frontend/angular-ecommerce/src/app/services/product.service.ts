import { HttpClient } from '@angular/common/http'; // this should be correc (angular/commom/http)
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs'; // reactive JS
import { Product } from '../common/product';
import { ProductCategory } from '../common/product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  

  private baseUrl = "http://localhost:8080/api/products"; // ENDPoint for products 
  
  private categoryUrl = "http://localhost:8080/api/product-category"; // ENDPoint for productCagetories 

  constructor(private httpClient: HttpClient) {
  }

  getProductList(theCategoryId: number): Observable<Product[]>{

        // build  URL based on category id 

        const  searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;

        console.log(`Search URL =${searchUrl}`);
        return  this.httpClient.get<GetResponseProducts>(searchUrl)
        .pipe(
          map(response => response._embedded.products)
        );
        ;
      }

    getProductCategories() : Observable<ProductCategory[]>{

      return  this.httpClient.get<GetResponseProductCategory>(this.categoryUrl)
      .pipe(
        map(response => response._embedded.productCategory)
      );
      ;
    }
    
    searchProducts(theKeyword: string): Observable<Product[]>{

      // build  URL based on search keyword 

      const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`;

      console.log(`Search URL =${searchUrl}`);
      return this.httpClient.get<GetResponseProducts>(searchUrl)
      .pipe(
        map(response => response._embedded.products)
      );
      ;
    }
   
}

interface GetResponseProducts{
  _embedded: {
    products: Product[];
  }
}

interface GetResponseProductCategory{
  // unwraps the JSON from Spring Data REST _embedded entry
  _embedded: {
    productCategory: ProductCategory[];
  }
}