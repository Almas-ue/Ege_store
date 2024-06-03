import React, { useState } from "react";
import "./card.scss";
import Data from "../../../data/data";
import Liked from "../liked/liked";

function Card() {
  let data = Data();

  let [count, setCount] = useState(0);

  return data.map((item) => {
    return (
      <div className="card shadow-card">
        <div className="card__inner">
          <div className="card__product-image">
            <Liked />
            <img src="./products/product.svg" alt="product" />
          </div>

          <div className="card__info-text">
            <h4 className="card__product-name">{item.name_product}</h4>
            <p className="card__product-article">Артикул {item.article}</p>
            <div className="price-block">
              <p className="card__title-price">Цена за штуку</p>
              <p className="card__price">{item.price} руб.</p>
            </div>
          </div>

          <div className="card__count-product d-flex items-center">
            <div className="setting-count">
              <p className="txt-count">Количество</p>
              <div className="set-count d-flex items-center">
                <button
                  className="minus oper"
                  onClick={() => {
                    setCount(count - 1);
                  }}
                >
                  -
                </button>
                <p className="count">{count}</p>
                <button
                  className="plus oper"
                  onClick={() => {
                    setCount(count + 1);
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <div className="button-busket">
              <button className="btn btn_busket desc-small">В Корзину</button>
            </div>
          </div>
        </div>
      </div>
    );
  });
}

export default Card;
