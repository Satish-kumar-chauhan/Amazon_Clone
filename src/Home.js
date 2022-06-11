import React from 'react';
import MainSlider from './Component/MainSlider';
import Product from './HOC_Component/Product';
import TodayDeals from './Component/TodayDeals';
const itemData = [
  [
    {
      itemName: 'Women Clothing',
      itemImg:
        'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/1-min._SY116_CB666463598_.jpg',
    },
    {
      itemName: 'Footwear+Handbags',
      itemImg:
        'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/6-min._SY116_CB666463598_.jpg',
    },
    {
      itemName: 'Watches',
      itemImg:
        'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/8-min._SY116_CB666463598_.jpg',
    },
    {
      itemName: 'Fashion Jewellery',
      itemImg:
        'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/7-min._SY116_CB666463598_.jpg',
    },
  ],
  [
    {
      itemName: 'ACs',
      itemImg:
        'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg',
    },
    {
      itemName: 'Refrigerators',
      itemImg:
        'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg',
    },
    {
      itemName: 'Microwaves',
      itemImg:
        'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg',
    },
    {
      itemName: 'Washing Machines',
      itemImg:
        'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg',
    },
  ],
];

export default function Home() {
  return (
    <>
      <div className="main_page_slider">
        <MainSlider />
      </div>
      <div
        className="product_Container"
        style={{
          background:
            'linear-gradient(to bottom, transparent,#eaeded,#eaeded )',
        }}
      >
        <Product
          pTitle="Up to 60% off | Styles for Women"
          itemData={itemData[0]}
        />
        <Product pTitle="Top picks for your home" itemData={itemData[1]} />
        <Product
          pTitle="Up to 60% off | Styles for Women"
          itemData={itemData[0]}
        />
        <Product pTitle="Top picks for your home" itemData={itemData[1]} />
      </div>
      <div className="product_Container2">
        <TodayDeals />
      </div>
    </>
  );
}
