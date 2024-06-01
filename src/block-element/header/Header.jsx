import React from "react";
import "./header.scss";

function Header() {
  return (
    <>
      <header className="header">
        <div className="header_top">
          <div className="flex_block container">
            <div className="header_top_first">
              <div className="icon">
                <a href="#">
                  <img src="logo/logo.svg" alt="Логотип" />
                </a>
              </div>
              <nav className="nav">
                <ul className="list">
                  <li className="item">
                    <a href="#" className="link_item">
                      Главная
                    </a>
                  </li>
                  <li className="item">
                    <a href="#" className="link_item">
                      О компании
                    </a>
                  </li>
                  <li className="item">
                    <a href="#" className="link_item">
                      Каталог
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header_top_second">
              <a href="tel:8965842929" className="tel_info">
                <img src="header/Phone.svg" alt="Телефон" />
                <span className="num_phone">+7 (965) 084-29-29</span>
              </a>
              <a href="" className="heart-link">
                <img
                  src="header/heart.svg"
                  alt="Избранные"
                  className="heart"
                />
              </a>
              <a href="" className="basket">
                <img src="header/basket.svg" alt="Корзина" />
                <span className="basket_text">Пусто</span>
              </a>
            </div>
          </div>
        </div>
        <div className="header_bottom">
          <div className="flex_block container">
            <div className="header_bottom_first">
              <nav className="menu">
                <ul className="list_menu">
                  <li className="item">
                    <a href="#" className="link_item button_menu">
                      <svg
                        width="16"
                        height="24"
                        viewBox="0 0 16 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0 12C0 11.4477 0.447715 11 1 11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13H1C0.447715 13 0 12.5523 0 12Z"
                          fill="#3C3C3B"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0 16C0 15.4477 0.335786 15 0.75 15H11.25C11.6642 15 12 15.4477 12 16C12 16.5523 11.6642 17 11.25 17H0.75C0.335786 17 0 16.5523 0 16Z"
                          fill="#3C3C3B"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0 8C0 7.44772 0.447715 7 1 7H15C15.5523 7 16 7.44772 16 8C16 8.55228 15.5523 9 15 9H1C0.447715 9 0 8.55228 0 8Z"
                          fill="#3C3C3B"
                        />
                      </svg>
                      Каталог
                    </a>
                  </li>
                  <li className="item">
                    <a href="#" className="link_item">
                      Стройматериалы
                    </a>
                  </li>
                  <li className="item">
                    <a href="#" className="link_item">
                      Инструменты
                    </a>
                  </li>
                  <li className="item">
                    <a href="#" className="link_item">
                      Электрика
                    </a>
                  </li>
                  <li className="item">
                    <a href="#" className="link_item">
                      Интерьер и одежда
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header_bottom_second">
              <div className="find_product" id="findes">
                <input
                  type="search"
                  name="find"
                  id="seacrh"
                  placeholder="Поиск, например Круг зачистной"
                />
              </div>
              <div className="location">
                <button className="button_location">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5 5C10.5 8.5 6 11.5 6 11.5C6 11.5 1.5 8.5 1.5 5C1.5 3.80653 1.97411 2.66193 2.81802 1.81802C3.66193 0.974106 4.80653 0.5 6 0.5C7.19347 0.5 8.33807 0.974106 9.18198 1.81802C10.0259 2.66193 10.5 3.80653 10.5 5Z"
                      stroke="#4B565E"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6 6.5C6.82843 6.5 7.5 5.82843 7.5 5C7.5 4.17157 6.82843 3.5 6 3.5C5.17157 3.5 4.5 4.17157 4.5 5C4.5 5.82843 5.17157 6.5 6 6.5Z"
                      fill="#4B565E"
                      stroke="#4B565E"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span className="location_city">Москва</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
