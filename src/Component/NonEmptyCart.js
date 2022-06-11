import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeToCart } from '../Store/CartSlice';
import {
  incrementSelectedItem,
  decrementSelectedItem,
} from '../Store/CartSlice';
import { BiRupee } from 'react-icons/bi';
export default function NonEmptyCart() {
  const listOfItems = useSelector((state) => state.cartManager.listOfItems);
  const dispatch = useDispatch();
  return (
    <div className="non_empty_cart">
      <h1>Shopping Cart</h1>
      <div className="total_cart_items_subTotal">
        {listOfItems.map((d, index) => {
          return (
            <div className="" key={index}>
              <div className="cart_item_for_checkout">
                <div className="cart_item_for_checkout_img">
                  <img src={d.storeItemImg} alt="" />
                </div>
                <div className="cart_item_for_checkout_details">
                  <h5>Item Description</h5>
                  <p style={{ color: 'green' }}>In Stock</p>
                  <p>Eligible for free shopping</p>
                  <p style={{ fontWeight: 'bold' }}>Style name :</p>
                  <p style={{ fontWeight: 'bold' }}>Color:</p>
                  <p>{d.storeItemId}</p>
                  <p className="itemQuantity">
                    Quantity{' '}
                    <span
                      onClick={() =>
                        dispatch(decrementSelectedItem(d.storeItemId))
                      }
                    >
                      -
                    </span>
                    <span>{d.storeItemQuantity}</span>
                    <span
                      onClick={() =>
                        dispatch(incrementSelectedItem(d.storeItemId))
                      }
                    >
                      +
                    </span>
                  </p>
                </div>
                <div className="cart_item_for_checkout_itemPrice">
                  <p>
                    <BiRupee />
                    {d.storeItemPrice}
                  </p>
                  <button onClick={() => dispatch(removeToCart(d.storeItemId))}>
                    Remove item
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        <p className="subTotal">Subtotal (items) :</p>
      </div>
    </div>
  );
}
