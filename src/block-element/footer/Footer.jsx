import React from "react";
import "./footer.scss";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer_top">
            <div className="footer_info">
              <div className="logo">
                <img src="public/logo/logo.svg" alt="Логотип" />
              </div>
              <div className="contact">
                <div className="contact_info">
                  <img src="public/footer/Icon.svg" alt="call" />
                  <div className="text_info">
                    <p className="contact_call">Контактный телефон</p>
                    <p className="info_contact white">
                      + 7 (812) 309-09-34 <br /> <br /> + 7 (965) 084-29-09
                    </p>
                  </div>
                </div>
                <div className="contact_info">
                  <img src="public/footer/sms.svg" alt="mail" />
                  <div className="text_info">
                    <p className="contact_call">Электронная почта</p>
                    <p className="info_contact white">
                      tustin78@mail.ru <br /> <br /> info@tustin.ru
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer_contact_mail">
              <div className="footer_contact_mail_inner">
                <h3 className="question_text white">Остались вопросы?</h3>
                <p className="desc_text_question white">
                  Узнавайте первым о скидках, предложениях и событиях
                  еженедельно в своем почтовом ящике. Отпишитесь в любое время
                  одним щелчком мыши.
                </p>
                <div className="form">
                  <input
                    type="email"
                    name="mail"
                    id="mail"
                    placeholder="Введите свою почту"
                  />
                  <button className="send">Отправить</button>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_bottom"></div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
