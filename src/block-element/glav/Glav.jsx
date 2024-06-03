import React from "react";
import Aside from "./../aside/aside.jsx";
import "./glav.scss";
import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";
import Card from "../Elements/card/card.jsx";

console.log("GOOD");

function Glav() {
  return (
    <>
      <Header />
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
                      src="setting_content_product/wrap.svg"
                      alt="wrap_show"
                    />
                  </button>
                  <button className="show_column">
                    <img
                      src="setting_content_product/column.svg"
                      alt="column_show"
                    />
                  </button>
                </div>
              </div>
              <div className="card_product">
                <Card />
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Glav;
