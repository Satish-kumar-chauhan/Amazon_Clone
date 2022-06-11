import React from 'react';

export default function EmptyCart() {
  return (
    <div className="empty_cart">
      <div className="empty_cart_logo"></div>
      <div className="if_session_login_false">
        <h1>Your Amazon Basket is empty</h1>
        <p>
          <button>Sign in to your account</button>
          <button>Sign up now</button>
        </p>
      </div>
    </div>
  );
}
