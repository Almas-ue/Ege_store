import React from "react";
import Block_pages from "../Elements/block_page/block_page";
import Header from "../header/Header";
import Footer from "../footer/Footer";

function Map() {
  const styles = {
    section: {
      flex: 1,
      marginBottom: "-4px"
    },
    h2: {
      marginTop: "28px",
    },
    iframe: {
      border: 0,
      marginTop: "30px",
      width: "100%"
    },
  };
  return (
    <>
      <Header />
      <section className="map" style={styles.section}>
        <div className="container">
          <Block_pages name_page="О Компании" adress="/map" />
          <h2 className="title_section" style={styles.h2}>
            О компании
          </h2>
        </div>
        <iframe
          style={styles.iframe}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20031.989649854117!2d71.45137418684081!3d51.12693189532836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42458404652ad61d%3A0x9158e42508bbed44!2z0JDQutC-0YDQtNCw!5e0!3m2!1sru!2skz!4v1717446699341!5m2!1sru!2skz"
          height="800"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      <Footer />
    </>
  );
}

export default Map;
