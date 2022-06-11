import React, { useEffect, useState, createContext } from 'react';
import CurrencyFormat from 'react-currency-format';
import { BiRupee } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
export default function SubTotal() {
  const subTotal = useSelector((state) => state.cartManager.listOfItems);
  const [itemsTotal, setItemsTotal] = useState({
    totalItems: 0,
    totalValue: 0,
  });

  useEffect(() => {
    let total = 0;
    let totalItems = 0;
    subTotal.map((item) => {
      total = total + item.storeItemQuantity * item.storeItemPrice;
      totalItems = totalItems + item.storeItemQuantity;
    }),
      setItemsTotal({
        totalItems: totalItems,
        totalValue: total,
      });
  }, [subTotal]);
  return (
    <div className="sub_total chekout_sub">
      <h1>Your Billing</h1>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              SubTotal (Items {itemsTotal.totalItems}):
              <strong>
                <BiRupee />
                {value}
              </strong>
            </p>
            <small>
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        value={itemsTotal.totalValue}
        displayType={'text'}
        thousandSeparator={true}
      />
      <button className="d-block w-100 mt-2">Proceed to Chekout</button>
    </div>
  );
}
