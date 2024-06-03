import React from "react";
import "./work.scss";

function Work() {
  return (
    <>
      <section className="work">
        <a href="#" className="work__link">
          <div className="work__block">
            <h2 className="work__title title_h2">Более 10 000 наименований </h2>
            <p className="work__desc desc-tran">
              Инструмент для вашего бизнеса, разнообразных марок
            </p>
            <div href="#" className="work__link-inner second-text">
              Перейти в каталог
            </div>
          </div>
          <div className="work__block-image">
            <img src="./work/man_stroi.svg" alt="man_stroi" />
          </div>
        </a>
      </section>
    </>
  );
}

export default Work;
