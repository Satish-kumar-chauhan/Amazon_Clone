import React from 'react';
import SubTotal from './Component/SubTotal';
import EmptyCart from './Component/EmptyCart';
import NonEmptyCart from './Component/NonEmptyCart';
import { useSelector, useDispatch } from 'react-redux';

export default function Checkout() {
  let cartItems = useSelector((state) => state.cartManager.listOfItems);
  return (
    <div className="checkout">
      <div className="checkout_inner">
        <div className="chekout_sub total_cart_items_details">
          {cartItems.length !== 0 ? <NonEmptyCart /> : <EmptyCart />}
        </div>
        <SubTotal />
      </div>
    </div>
  );
}
