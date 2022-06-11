import React, { useRef } from 'react';
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { GrLocation } from 'react-icons/gr';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function Header() {
  const totalItemsInCart = useSelector(
    (state) => state.cartManager.listOfItems
  );
  const searchField = useRef();
  const handleFocus = () => {
    searchField.current.style.border = '2px solid #f90';
  };
  const handleBlur = () => {
    searchField.current.style.border = '2px solid #232f3e';
  };
  return (
    <div className="header">
      <div className="logo_location">
        <NavLink to="/">
          <img src="https://www.doorwaysva.org/wp-content/uploads/2019/06/amazon-logo.png" />
        </NavLink>
        <div className="location-option">
          <span>
            <GrLocation />
          </span>
          <span>
            <p>Hello</p>
            <p>Select Your Address</p>
          </span>
        </div>
      </div>
      <div className="searchField" ref={searchField}>
        <input type="text" onFocus={handleFocus} onBlur={handleBlur} />
        <button>
          <AiOutlineSearch />
        </button>
      </div>

      <div className="header-nav">
        <div className="nav-option">
          <span>Hello Guest</span>
          <span>Sign In</span>
        </div>
        <div className="nav-option">
          <span>Returns</span>
          <span>& Orders</span>
        </div>
        <div className="nav-option">
          <span>Your</span>
          <span>Prime</span>
        </div>
        <div className="nav-option">
          <NavLink to="/checkout" className="total_cart_items">
            <AiOutlineShoppingCart />
            <div className="total_cart_items_number">
              {totalItemsInCart.length}
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
