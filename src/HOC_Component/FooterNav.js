import React from 'react';

export default function FooterNav({ f_N_Title, navData }) {
  return (
    <div className="footer-nav-div">
      <h5>{f_N_Title}</h5>
      <ul>
        {navData.map((navLink, index) => {
          return <li key={index}>{navLink}</li>;
        })}
      </ul>
    </div>
  );
}
