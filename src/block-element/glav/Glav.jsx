import React from "react";
import "./glav.scss";

function Glav() {
  return (
    <>
      <main className="main">
        <div className="container">
          <div className="block_pages">
            <a href="#" className="page_link">
              Главная
            </a>
            <svg
              width="21"
              height="9"
              viewBox="0 0 21 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.3536 4.85355C20.5488 4.65829 20.5488 4.34171 20.3536 4.14645L17.1716 0.964466C16.9763 0.769204 16.6597 0.769204 16.4645 0.964466C16.2692 1.15973 16.2692 1.47631 16.4645 1.67157L19.2929 4.5L16.4645 7.32843C16.2692 7.52369 16.2692 7.84027 16.4645 8.03553C16.6597 8.2308 16.9763 8.2308 17.1716 8.03553L20.3536 4.85355ZM0 5H20V4H0V5Z"
                fill="#A1A0A0"
              />
            </svg>
            <a href="#" className="page_link">
              Стройматериалы
            </a>
          </div>
          <section className="product">
            <Aside />

            <div className="product_content">
              <div className="setting_product">
                <div className="setting_content">
                  <div className="sort_setting">
                    <p className="title_sort">Сортировать по:</p>
                    <span id="name_sort">Названию</span>
                  </div>
                </div>
                <div className="setting_show">
                  <p className="show_text">Вид</p>
                  <button className="show_wrap">
                    <img
                      src="public/setting_content_product/wrap.svg"
                      alt="wrap_show"
                    />
                  </button>
                  <button className="show_column">
                    <img
                      src="public/setting_content_product/column.svg"
                      alt="column_show"
                    />
                  </button>
                </div>
              </div>
              <div className="card_product">
                <div className="card">
                  <div className="inner_card">
                    <div className="heart_card">
                      <svg
                        width="24"
                        height="39"
                        viewBox="0 0 24 39"
                        fill="none"
                      >
                        <path
                          d="M20.8401 12.1099C20.3294 11.5989 19.7229 11.1935 19.0555 10.917C18.388 10.6404 17.6726 10.498 16.9501 10.498C16.2276 10.498 15.5122 10.6404 14.8448 10.917C14.1773 11.1935 13.5709 11.5989 13.0601 12.1099L12.0001 13.1699L10.9401 12.1099C9.90843 11.0782 8.50915 10.4986 7.05012 10.4986C5.59109 10.4986 4.19181 11.0782 3.16012 12.1099C2.12843 13.1416 1.54883 14.5408 1.54883 15.9999C1.54883 17.4589 2.12843 18.8582 3.16012 19.8899L4.22012 20.9499L12.0001 28.7299L19.7801 20.9499L20.8401 19.8899C21.3511 19.3791 21.7565 18.7727 22.033 18.1052C22.3096 17.4378 22.4519 16.7224 22.4519 15.9999C22.4519 15.2774 22.3096 14.562 22.033 13.8945C21.7565 13.2271 21.3511 12.6206 20.8401 12.1099V12.1099Z"
                          stroke="#3C3C3B"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="image_product">
                      <img src="./public/products/product.svg" alt="product" />
                    </div>
                    <h3 className="title_name_product">
                      Круг зачистной 125х6х22
                    </h3>
                    <p className="article_product">Артикул 00004</p>
                    <div className="price_product">
                      <p className="title_price">Цена за штуку</p>
                      <p className="price_product">52 руб.</p>
                    </div>
                    <div className="buy_product">
                      <div className="col_setting">
                        <p className="count_title">Количество</p>
                        <p className="count">1</p>
                      </div>
                      <button className="card_btn">В корзину</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Glav;
