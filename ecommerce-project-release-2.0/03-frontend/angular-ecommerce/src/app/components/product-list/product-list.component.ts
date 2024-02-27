import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
//  templateUrl: './product-list.component.html',
  templateUrl: './product-list-table.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) // Inject our ProductService here
  {
  } 

  // once an Angular component is initialised it calls the ngOnInit method
  ngOnInit(): void {
    this.listProducts();
  }
  listProducts() { // method is invoked once you "subscruibe"
    this.productService.getProductList().subscribe(
      data => {
        this.products = data; // assing results to the products array
      }
    )
    //throw new Error('Method not implemented.');
  }

}
