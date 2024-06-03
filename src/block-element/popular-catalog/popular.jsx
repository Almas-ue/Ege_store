import React, { useRef } from "react";
import "./popular.scss";
import List_porduct from "../Elements/list_product/list";
import { Link } from "react-router-dom";
function Popular() {
  return (
    <>
      <section className="popular relative">
        <header className="popular__block-title d-flex items-center">
          <h3 className="popular__title title_section">Популярные товары</h3>
          <Link to="glav" className="popular__link second-text">
            Посмотреть все товары
          </Link>
        </header>
        <List_porduct />
      </section>
    </>
  );
}

export default Popular;
