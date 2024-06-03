import React from "react";
import Aside from "./../aside/aside.jsx";
import "./glav.scss";
import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";
import Card from "../Elements/card/card.jsx";
import Block_pages from "../Elements/block_page/block_page.jsx";

function Glav() {
  return (
    <>
      <Header />
      <main className="main">
        <div className="container">
          <Block_pages name_page="Строитель" adress="/glav" />
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
