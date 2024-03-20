import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html', // for grid display of Products
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  currentCategoryId : number = 1; //default

  constructor(private productService: ProductService,
      private route: ActivatedRoute) // Inject our ProductService here
  {
  } 

  // once an Angular component is initialised it calls the ngOnInit method
  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
    this.listProducts();
    });
  }

  listProducts() { // method is invoked once you "subscribe"

    // check if "id" param is available // by using the activated route, then the state of route at given snapshot in time, get the Mp of all the route params, read the param 'id'
    const hasCategoryId : boolean = this.route.snapshot.paramMap.has("id"); 

    if (hasCategoryId){
      // get the "id" param string and convert it into a number using '+' 
      this.currentCategoryId = +this.route.snapshot.paramMap.get("id")!; // ! is for not null
    }
    else{
      //default to 1
      this.currentCategoryId = 1;
    }

    // get the products for the given category id
    this.productService.getProductList(this.currentCategoryId).subscribe(
      data => {
        this.products = data; // adding results to the products array
      }
    )

  }

}
