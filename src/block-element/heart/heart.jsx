import React, { useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "../Elements/card/card.scss";
import "./heart.scss";
import Block_pages from "../Elements/block_page/block_page";
import Data from "../../data/data";

function Heart() {
  let data = Data();
  let data2 = data.filter((item) => item.like == true);

  return (
    <>
      <Header />
      <section className="heart">
        <div className="container">
          <Block_pages name_page="Избранное" link="/heart" />

          <div className="heart__block">
            <header className="heart__header d-flex items-center">
              <h2 className="title_section">Избранное</h2>
              <p className="title_second">{data2.length} Товаров</p>
            </header>

            <div className="heart__products">
              {data2.map((item) => {
                let [count, setCount] = useState(1);
                return (
                  <>
                    <div className="group">
                      <div className="heart__list-product">
                        <div className="item-product shadow-width d-flex">
                          <div className="product-image">
                            <img src="./products/product.svg" alt="product" />
                          </div>
                          <div className="product-text">
                            <h3 className="card_title">{item.name_product}</h3>
                            <div className="block-price">
                              <p className="card__price">
                                {count * item.price} руб.
                              </p>
                              <p className="card__title-price">
                                {item.price} руб/шт.
                              </p>
                            </div>
                            <div className="set-count d-flex items-center">
                              <button
                                onClick={() => {
                                  if (count > 0) {
                                    setCount(count - 1);
                                  }
                                }}
                                className="minus oper"
                              >
                                -
                              </button>
                              <p className="count">{count}</p>
                              <button
                                onClick={() => {
                                  setCount(count + 1);
                                }}
                                className="plus oper"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
export default Heart;
