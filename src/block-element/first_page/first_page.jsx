import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Pages from "../pages-catalog/pages.jsx";
import Work from "../work/work.jsx";
import "./first_page.scss";
import Popular from "../popular-catalog/popular.jsx";
import New_catalog from "../new-catalog/new_catalog.jsx";

function First_page() {
  return (
    <>
      <Header />
      <main className="main">
        <section className="hero">
          <img
            className="hero_image"
            src="./public/first_page/hero/male_hero.svg"
            alt="hero_image"
          />
          <div className="container">
            <p className="hero_text">
              Инструмент для вашего <br /> бизнеса
            </p>
          </div>
        </section>
        <div className="container">
          <section className="info_service">
            <div className="service__item">
              <div className="service__logo">
                <img
                  src="./public/first_page/info-service/Wall.svg"
                  alt="Wall"
                />
              </div>
              <div className="service__text">
                <p className="service__desc">
                  <span className="black">Большой ассортимент</span>
                  <br />
                  строительных материалов всегда в наличии
                </p>
              </div>
            </div>
            <div className="service__item">
              <div className="service__logo">
                <img src="./public/first_page/info-service/car.svg" alt="car" />
              </div>
              <div className="service__text">
                <p className="service__desc">
                  <span className="black">Доставка стройматериалов </span>{" "}
                  <br />в течении четырех часов или в любое удобное время
                </p>
              </div>
            </div>
            <div className="service__item">
              <div className="service__logo">
                <img
                  src="./public/first_page/info-service/like.svg"
                  alt="like"
                />
              </div>
              <div className="service__text">
                <p className="service__desc">
                  Многоуровневая{" "}
                  <span className="black">
                    система <br /> управления качеством
                  </span>
                  по стандарту <br /> ISO 9001
                </p>
              </div>
            </div>
          </section>
          <Pages />
          <Popular />
          <Work />
          <New_catalog />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default First_page;
