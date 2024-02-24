import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';

import {HttpClientModule} from '@angular/common/http'; // added import for the project
import { ProductService } from './services/product.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule // added the import for this
  ],
  providers: [ProductService], // inject our service into our front-end
  bootstrap: [AppComponent]
})
export class AppModule { }
