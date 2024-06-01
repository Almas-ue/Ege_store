import React, { useRef } from "react";
import "./popular.scss";
import Card from "../Elements/card/card";

function Popular() {
  const containerRef = useRef(null);

  const handleScroll = (scrollOffset) => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += scrollOffset;
    }
  };
  return (
    <>
      <section className="popular">
        <div className="popular__block-title d-flex items-center">
          <h3 className="popular__title title_section">Популярные товары</h3>
          <a href="#" className="popular__link second-text">
            Посмотреть все товары
          </a>
        </div>
        <div className="popular__product" ref={containerRef}>
          <Card />
          <button
            className="scroll-button left-btn shadow-circle"
            onClick={() => handleScroll(-1000)}
          >
            <svg width="19" height="26" viewBox="0 0 19 26" fill="none">
              <path
                d="M17.5 25L1.65737 13.817C1.09295 13.4186 1.09295 12.5814 1.65737 12.183L17.5 0.999999"
                stroke="#F0BA4E"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </button>
          <button
            className="scroll-button right-btn shadow-circle"
            onClick={() => handleScroll(1000)}
          >
            <svg width="19" height="26" viewBox="0 0 19 26" fill="none">
              <path
              fillRule="evenodd"
                d="M1.5 25L17.3426 13.817C17.9071 13.4186 17.9071 12.5814 17.3426 12.183L1.5 0.999999"
                stroke="#F0BA4E"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </div>
      </section>
    </>
  );
}

export default Popular;
