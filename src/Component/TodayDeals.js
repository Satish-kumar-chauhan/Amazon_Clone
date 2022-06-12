import React, { useState, useContext } from 'react';
import { BiRupee, BiStar } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import { Rating } from 'react-simple-star-rating';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Store/CartSlice';
import { setAlertDetails } from '../Store/AlertSlice';
const todayDeals = [
  {
    itmDiscount: '17%',
    itmImg: 'https://m.media-amazon.com/images/I/415egLIVypL._AC_SY200_.jpg',
    rating: 65,
    itemId: 1234_1,
    itemPrice: 12500,
  },
  {
    itmDiscount: '69%',
    itmImg: 'https://m.media-amazon.com/images/I/31GUbeFG3FL._AC_SY200_.jpg',
    rating: 85,
    itemId: 1234_2,
    itemPrice: 2500,
  },
  {
    itmDiscount: '75%',
    itmImg: 'https://m.media-amazon.com/images/I/31k5rhxEQ5L._AC_SY200_.jpg',
    rating: 45,
    itemId: 1234_3,
    itemPrice: 550,
  },
  {
    itmDiscount: '68%',
    itmImg: 'https://m.media-amazon.com/images/I/31o5u6eJzjL._AC_SY200_.jpg',
    rating: 68,
    itemId: 1234_4,
    itemPrice: 3400,
  },
  {
    itmDiscount: '88%',
    itmImg: 'https://m.media-amazon.com/images/I/31d8OB8YgJL._AC_SY200_.jpg',
    rating: 70,
    itemId: 1234_5,
    itemPrice: 1250,
  },
  {
    itmDiscount: '30%',
    itmImg: 'https://m.media-amazon.com/images/I/51QrDJJ7oEL._AC_SY200_.jpg',
    rating: 75,
    itemId: 1234_6,
    itemPrice: 340,
  },
  {
    itmDiscount: '30%',
    itmImg: 'https://m.media-amazon.com/images/I/31ug-vujiiL._AC_SY200_.jpg',
    rating: 65,
    itemId: 1234_7,
    itemPrice: 180,
  },
  {
    itmDiscount: '84%',
    itmImg: 'https://m.media-amazon.com/images/I/61jZGxRV-VL._AC_SY200_.png',
    rating: 65,
    itemId: 1234_8,
    itemPrice: 5678,
  },
  {
    itmDiscount: '33%',
    itmImg: 'https://m.media-amazon.com/images/I/214Ck7MfbRL._AC_SY200_.jpg',
    rating: 89,
    itemId: 1234_9,
    itemPrice: 1254,
  },
  {
    itmDiscount: '62%',
    itmImg: 'https://m.media-amazon.com/images/I/41hVC-zcFEL._AC_SY200_.jpg',
    rating: 97,
    itemId: 1234_10,
    itemPrice: 2500,
  },
  {
    itmDiscount: 'R16000',
    itmImg: 'https://m.media-amazon.com/images/I/41O7cCoUoVL._AC_SY200_.jpg',
    rating: 49,
    itemId: 1234_11,
    itemPrice: 500,
  },
  {
    itmDiscount: '31%',
    itmImg: 'https://m.media-amazon.com/images/I/51GtHXY7TAL._AC_SY200_.jpg',
    rating: 65,
    itemId: 1234_12,
    itemPrice: 54000,
  },
  {
    itmDiscount: '66%',
    itmImg: 'https://m.media-amazon.com/images/I/41AyUEyH5qS._AC_SY200_.jpg',
    rating: 57,
    itemId: 1234_13,
    itemPrice: 480,
  },
  {
    itmDiscount: '77%',
    itmImg: 'https://m.media-amazon.com/images/I/511HLRwoVCL._AC_SY200_.jpg',
    rating: 78,
    itemId: 1234_14,
    itemPrice: 799,
  },
  {
    itmDiscount: '87%',
    itmImg: 'https://m.media-amazon.com/images/I/51TqYkyaI3L._AC_SY200_.jpg',
    rating: 37,
    itemId: 1234_15,
    itemPrice: 2199,
  },
  {
    itmDiscount: '62%',
    itmImg: 'https://m.media-amazon.com/images/I/41B-0k0WSKL._AC_SY200_.jpg',
    rating: 82,
    itemId: 1234_16,
    itemPrice: 1999,
  },
  {
    itmDiscount: '62%',
    itmImg: 'https://m.media-amazon.com/images/I/31XeLoY52sL._AC_SY200_.jpg',
    rating: 65,
    itemId: 1234_17,
    itemPrice: 1899,
  },
];
import { AlertContext } from '../App';
export default function TodayDeals() {
  const dispatch = useDispatch();
  const handleRating = (e) => {
    console.log(e);
  };
  const handleAddToCart = (id, img, qty, rate) => {
    dispatch(
      addToCart({
        storeItemId: id,
        storeItemImg: img,
        storeItemQuantity: qty,
        storeItemPrice: rate,
      })
    );
    dispatch(
      setAlertDetails({
        message: 'Item added to cart successfully',
        type: 'success',
      })
    );
    setTimeout(() => {
      dispatch(setAlertDetails(null));
    }, 500);
  };
  return (
    <div className="today_deals">
      <h1>Today’s Deals</h1>
      <div className="today_deals_sub" id="today_deals_sub">
        {todayDeals.map((td) => {
          return (
            <div className="today_deals_item">
              <div className="today_deals_item_inner">
                <div className="today_deals_item_img">
                  <img src={td.itmImg} alt="" />
                </div>
                <div className="rating_area">
                  <Rating
                    onClick={handleRating}
                    ratingValue={td.rating}
                    allowHalfIcon={true}
                  />
                  {/* <p>
                    {Array(5)
                      .fill()
                      .map((_, i) => {
                        return <AiFillStar />;
                      })}
                  </p> */}
                </div>
                <div className="today_deals_addcart">
                  <button
                    onClick={() =>
                      handleAddToCart(td.itemId, td.itmImg, 1, td.itemPrice)
                    }
                  >
                    Add To Cart
                  </button>
                </div>
                <p className="today_deals_item_rate">
                  <span className="today_deals_item_discount">
                    Up to{' '}
                    {td.itmDiscount.includes('R') ? (
                      <>
                        <BiRupee /> {td.itmDiscount.split('R')[1]}
                      </>
                    ) : (
                      td.itmDiscount
                    )}
                    off
                  </span>
                  <span className="today_deals_item_offer">
                    Deal of the Day
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="today_deals_nav_icons today_deals_prev_icon">
        <AiOutlineLeft
          onClick={() => {
            document.getElementById('today_deals_sub').scrollBy({
              top: 0,
              left: -1000,
              behaviour: 'smooth',
            });
          }}
        />
      </div>
      <div className="today_deals_nav_icons today_deals_next_icon">
        <AiOutlineRight
          onClick={() => {
            document.getElementById('today_deals_sub').scrollBy({
              top: 0,
              left: 1000,
              behaviour: 'smooth',
            });
          }}
        />
      </div>
    </div>
  );
}
