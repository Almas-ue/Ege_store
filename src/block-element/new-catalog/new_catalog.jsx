import React from "react";
import "./new_catalog.scss";
import List_porduct from "../Elements/list_product/list";
import { Link } from "react-router-dom";

function New_catalog() {
  return (
    <>
      <section className="new_catalog relative">
        <header className="head_title d-flex">
          <h3 className="popular__title title_section">Новинки</h3>
          <Link to="glav" className="popular__link second-text">
            Посмотреть все товары
          </Link>
        </header>
        <List_porduct />
      </section>
    </>
  );
}

export default New_catalog;
