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
  

  removeFromCart(theCartItem: CartItem){
     
    theCartItem.quantity--; 

     // if there are NO items of theCartItem
     if (theCartItem.quantity == 0 )
     { //remove this from the cartItems
        this.remove(theCartItem);
     }
     else{
      this.computerCartTotals();
     }
  }

  remove(theCartItem: CartItem){

    /*
    for(let i=0; i< this.cartItems.length ;i++){
      console.log(`item ${i} = ${this.cartItems[i].name}`);
    }
    */
    // get the index
    const itemIndex = this.cartItems.findIndex( tempCartItem => tempCartItem.id === theCartItem.id );
    console.log(`inside remove of CartService | item ${theCartItem.name} AT ${itemIndex}`); 

    if(itemIndex > -1)
      { 
        this.cartItems.splice(itemIndex, 1);    
        // console.log(`new CartItems = ${this.cartItems.toLocaleString}`);
        this.computerCartTotals(); // this is neccessary as this function is being used by 2 methods in cart-details.components.ts
      }

  }
  
  
  

}
