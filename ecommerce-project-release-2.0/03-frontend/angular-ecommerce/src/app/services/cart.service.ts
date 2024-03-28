import { Injectable } from '@angular/core';
import { CartItem } from '../common/cart-item';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  cartItems: CartItem[] = [];
  //Subject is a subclass of Observable. We use Subject to publish events in our code
  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();

  constructor() { }

  addToCart(theCartItem: CartItem){

    // check the item is already in the cart
    let alreadyExistsInCart: boolean = false;
    let existingCartItem: CartItem | undefined = undefined; // note this is undefinedin the beginning
    
    // find the items in the cart based on item id
    if (this.cartItems.length > 0 )
    { // if there are items in the cart
      existingCartItem = this.cartItems.find( tempCartItem => tempCartItem.id === theCartItem.id);  
    }
    
      // check if we found it
      alreadyExistsInCart = (existingCartItem != undefined);

      console.log(`existing cart item : ${existingCartItem?.id} | alreadyExists = ${alreadyExistsInCart}`);
      
  
    if (alreadyExistsInCart){
      if(existingCartItem)
        existingCartItem.quantity++; //  increment the quantity
    }
    else{
      this.cartItems.push(theCartItem);
  }
    // compute cart totals
    this.computerCartTotals();
  }
  computerCartTotals(){

    let totalPriceValue: number=0;///initialize with 0
    let totalQuantityValue: number=0;

    for (let currentCartItem of this.cartItems){
      totalPriceValue += currentCartItem.quantity * currentCartItem.unitPrice;
      totalQuantityValue += currentCartItem.quantity;
    }

    // publish the new values... all subsribers willreceive the new data

    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);

    // log cart data for debugging
    this.logCartValue(totalPriceValue, totalQuantityValue);
    }


    logCartValue(totalPriceValue: number, totalQuantityValue: number) {
    console.log(' Contents of the cart :');
    for(let tempCarItem of this.cartItems){
      const subTotalPrice = tempCarItem.quantity * tempCarItem.unitPrice;
      console.log(`name : ${tempCarItem.name} | quantity = ${tempCarItem.quantity} | unitprice = ${tempCarItem.unitPrice}`);
    }

    console.log(`totalQuantity = ${totalQuantityValue} | total Price = ${totalPriceValue}`);
    console.log('______________________________________');
  }
  

}
