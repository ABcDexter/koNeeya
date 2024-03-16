import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';

import {HttpClientModule} from '@angular/common/http'; // added import for the project
import { ProductService } from './services/product.service';

import { Routes, RouterModule } from '@angular/router';

const routes : Routes= [ //order is important
  {path: 'category/:id', component: ProductListComponent},
  {path: 'category', component: ProductListComponent},
  {path: 'products/:id', component: ProductListComponent},
  {path: '', redirectTo: '/products', pathMatch: 'full'}, //empty route
  {path: '**',redirectTo: '/products', pathMatch: 'full'} //generic wildcard


];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule // added the import for this
  ],
  providers: [ProductService], // inject our service into our front-end
  bootstrap: [AppComponent]
})
export class AppModule { }
