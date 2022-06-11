import React from 'react';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
export default function MainSlider() {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://m.media-amazon.com/images/I/71F7Dcem6HL._SX3000_.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://m.media-amazon.com/images/I/61zslpe-2yL._SX3000_.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://m.media-amazon.com/images/I/61SOcflSoPL._SX3000_.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true">
          <AiOutlineLeft />
        </span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true">
          <AiOutlineRight />
        </span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
