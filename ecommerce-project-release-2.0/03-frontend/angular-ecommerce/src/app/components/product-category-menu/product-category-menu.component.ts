import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/common/product-category';
import { ProductService } from 'src/app/services/product.service';

//generated using ng generate component
@Component({ 
  selector: 'app-product-category-menu',
  templateUrl: './product-category-menu.component.html',
  styleUrls: ['./product-category-menu.component.css']
})
export class ProductCategoryMenuComponent implements OnInit {
  
  productCategories: ProductCategory[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.listProductCategories();
  }
  
  listProductCategories() {
    this.productService.getProductCategories().subscribe(
      (      data: ProductCategory[]) => {
        console.log('Product Categories=' + JSON.stringify(data));
        this.productCategories = data;
      }
    );
  }

}
