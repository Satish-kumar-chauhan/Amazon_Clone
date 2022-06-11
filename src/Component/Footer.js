import React from 'react';
import FooterNav from '../HOC_Component/FooterNav';

const navData = [
  [
    'About Us',
    'Careers',
    'Press Releases',
    'Amazon Cares',
    'Gift a Smile',
    'Amazon Science',
  ],
  ['Facebook', 'Twitter', 'Instagram'],
  [
    'Sell on Amazon',
    'Sell under Amazon Accelerator',
    'Amazon Global Selling',
    'Become an Affiliate',
    'Fulfilment by Amazon',
    'Advertise Your Products',
    'Amazon Pay on Merchants',
  ],
  [
    'COVID-19 and Amazon',
    'Your Account',
    'Returns Centre',
    '100% Purchase Protection',
    'Amazon App Download',
    'Amazon Assistant Download',
    'Help',
  ],
];
const avlCountry = [
  'Australia',
  'Brazil',
  'Canada',
  'China',
  'France',
  'Germany',
  'Italy',
  'Japan',
  'Mexico',
  'Netherlands',
  'Poland',
  'Singapore',
  'Spain',
  'Turkey',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
];
export default function Footer() {
  return (
    <div className="footer">
      <div className="bottom_to_top">
        <button
          className="h-100 w-100"
          onClick={() => (document.documentElement.scrollTop = 0)}
        >
          Back To Top
        </button>
      </div>
      <div className="footer-nav">
        <div className="footer-nav-inner">
          <FooterNav f_N_Title="Get to Know Us" navData={navData[0]} />
          <FooterNav f_N_Title="Connect with Us" navData={navData[1]} />
          <FooterNav f_N_Title="Make Money with Us" navData={navData[2]} />
          <FooterNav f_N_Title="Let Us Help You" navData={navData[3]} />
        </div>
      </div>
      <div className="available_country">
        <div className="logo_lang"></div>
        <div className="avl-country">
          <ul>
            {avlCountry.map((cntry, index) => {
              return <li key={index}>{cntry}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
