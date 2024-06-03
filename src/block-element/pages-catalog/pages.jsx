import React from "react";
import { Link } from "react-router-dom";

import "./pages.scss";

function Pages() {
  return (
    <>
      <section className="group-pages">
        <div className="group__list-pages d-flex">
          <button className="btn-pages">1</button>
          <button className="btn-pages">2</button>
          <button className="btn-pages">3</button>
        </div>
        <div className="group__catalog d-flex">
          <div className="big_card">
            <Link to="glav" className="catalog_big shadow-big d-block">
              <h3 className="title_card-name title_name ">
                Строительный отделочный <br /> инструмент
              </h3>
              <div className="card_image">
                <img
                  src="./first_page/pages/stroi.svg"
                  alt="stroi"
                  className="image_card"
                />
              </div>
              <div className="card_block-swipe">
                <p className="card_text-swipe page_desc">Перейти в каталог</p>
                <button className="card_btn_swipe circle">
                  <svg width="21" height="8" viewBox="0 0 21 8" fill="none">
                    <path
                      d="M20.3536 4.35355C20.5488 4.15829 20.5488 3.84171 20.3536 3.64645L17.1716 0.464466C16.9763 0.269204 16.6597 0.269204 16.4645 0.464466C16.2692 0.659728 16.2692 0.976311 16.4645 1.17157L19.2929 4L16.4645 6.82843C16.2692 7.02369 16.2692 7.34027 16.4645 7.53553C16.6597 7.7308 16.9763 7.7308 17.1716 7.53553L20.3536 4.35355ZM0 4.5H20V3.5H0V4.5Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </div>
            </Link>
          </div>
          <div className="catalog_group-small d-flex">
            <Link
              to="glav"
              className="catalog_small card__mini-page-size d-block shadow-small"
            >
              <h3 className="title_name text_right">Эмали</h3>
              <div className="card_image">
                <img src="./first_page/pages/emali.svg" alt="emali" />
              </div>
              <div className="card_block-swipe d-flex">
                <p className="card_text_swipe page_desc">Перейти в каталог</p>
                <button className="card_btn_swipe circle">
                  <svg width="21" height="8" viewBox="0 0 21 8" fill="none">
                    <path
                      d="M20.3536 4.35355C20.5488 4.15829 20.5488 3.84171 20.3536 3.64645L17.1716 0.464466C16.9763 0.269204 16.6597 0.269204 16.4645 0.464466C16.2692 0.659728 16.2692 0.976311 16.4645 1.17157L19.2929 4L16.4645 6.82843C16.2692 7.02369 16.2692 7.34027 16.4645 7.53553C16.6597 7.7308 16.9763 7.7308 17.1716 7.53553L20.3536 4.35355ZM0 4.5H20V3.5H0V4.5Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </div>
            </Link>
            <Link
              to="glav"
              className="catalog_small card__mini-page-size d-block shadow-small"
            >
              <h3 className="title_name">
                Лакокрасочные <br /> материалы
              </h3>
              <div className="card_image">
                <img src="./first_page/pages/kraski.svg" alt="kraski" />
              </div>
              <div className="card_block-swipe">
                <p className="card_text_swipe page_desc">Перейти в каталог</p>
                <button className="card_btn_swipe circle">
                  <svg width="21" height="8" viewBox="0 0 21 8" fill="none">
                    <path
                      d="M20.3536 4.35355C20.5488 4.15829 20.5488 3.84171 20.3536 3.64645L17.1716 0.464466C16.9763 0.269204 16.6597 0.269204 16.4645 0.464466C16.2692 0.659728 16.2692 0.976311 16.4645 1.17157L19.2929 4L16.4645 6.82843C16.2692 7.02369 16.2692 7.34027 16.4645 7.53553C16.6597 7.7308 16.9763 7.7308 17.1716 7.53553L20.3536 4.35355ZM0 4.5H20V3.5H0V4.5Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </div>
            </Link>
            <Link
              to="glav"
              className="catalog_small card__mini-page-size d-block shadow-small"
            >
              <h3 className="title_name">
                Пены, клеи и <br /> герметики
              </h3>
              <div className="card_image">
                <img src="./first_page/pages/klei.svg" alt="klei" />
              </div>
              <div className="card_block-swipe">
                <p className="card_text_swipe page_desc">Перейти в каталог</p>
                <button className="card_btn_swipe circle">
                  <svg width="21" height="8" viewBox="0 0 21 8" fill="none">
                    <path
                      d="M20.3536 4.35355C20.5488 4.15829 20.5488 3.84171 20.3536 3.64645L17.1716 0.464466C16.9763 0.269204 16.6597 0.269204 16.4645 0.464466C16.2692 0.659728 16.2692 0.976311 16.4645 1.17157L19.2929 4L16.4645 6.82843C16.2692 7.02369 16.2692 7.34027 16.4645 7.53553C16.6597 7.7308 16.9763 7.7308 17.1716 7.53553L20.3536 4.35355ZM0 4.5H20V3.5H0V4.5Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </div>
            </Link>
            <Link
              to="glav"
              className="catalog_small card__mini-page-size d-block shadow-small"
            >
              <h3 className="title_name">Розетки и выключатели</h3>
              <div className="card_image">
                <img src="./first_page/pages/socket.svg" alt="socket" />
              </div>
              <div className="card_block-swipe">
                <p className="card_text_swipe page_desc">Перейти в каталог</p>
                <button className="card_btn_swipe circle">
                  <svg width="21" height="8" viewBox="0 0 21 8" fill="none">
                    <path
                      d="M20.3536 4.35355C20.5488 4.15829 20.5488 3.84171 20.3536 3.64645L17.1716 0.464466C16.9763 0.269204 16.6597 0.269204 16.4645 0.464466C16.2692 0.659728 16.2692 0.976311 16.4645 1.17157L19.2929 4L16.4645 6.82843C16.2692 7.02369 16.2692 7.34027 16.4645 7.53553C16.6597 7.7308 16.9763 7.7308 17.1716 7.53553L20.3536 4.35355ZM0 4.5H20V3.5H0V4.5Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Pages;
