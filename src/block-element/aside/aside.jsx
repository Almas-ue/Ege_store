import React from "react";
import "./aside.scss";

function Aside() {
  return (
    <>
      <aside className="category">
        <nav className="menu_category">
          <h2 className="title_category">Категории</h2>
          <ul className="list_category">
            <li className="item_category">
              <a href="#" className="link_category">
                <img src="public/category/stroi.svg" alt="Стройматериалы" />{" "}
                Стройматериалы
              </a>
            </li>
            <li className="item_category">
              <a href="#" className="link_category">
                <img src="public/category/Instrument.svg" alt="Инструменты" />{" "}
                Инструменты
              </a>
            </li>
            <li className="item_category">
              <a href="#" className="link_category">
                <img src="public/category/electric.svg" alt="Электрика" />{" "}
                Электрика
              </a>
            </li>
            <li className="item_category">
              <a href="#" className="link_category">
                <img
                  src="public/category/Interier.svg"
                  alt="Интерьер и отделка"
                />{" "}
                Интерьер и отделка
              </a>
            </li>
          </ul>
        </nav>
        <h2 className="price_setting">Цена</h2>
        <div className="check_block">
          <div className="check_button">
            <input
              className="box_button"
              type="checkbox"
              name="box_button"
              id="novelty"
            />{" "}
            <label for="novelty">Новинки</label>
          </div>
          <div className="check_button">
            <input
              className="box_button"
              type="checkbox"
              name="box_button"
              id="discount"
            />
            <label for="discount">Скидки</label>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Aside;
