import React from 'react';

export default function Product({ pTitle, itemData }) {
  return (
    <div className="productSub">
      <h1>{pTitle}</h1>
      <div className="productSubInner">
        {itemData.map((itm, index) => {
          return (
            <div className="productItem" key={index}>
              <img src={itm.itemImg} alt="" />
              <p>{itm.itemName}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
