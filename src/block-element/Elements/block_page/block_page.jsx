import React from "react";
import "./block_page.scss";
import { Link } from "react-router-dom";

function Block_pages({ name_page, adress }) {
  return (
    <div className="block_pages">
      <Link to="//" className="page_link">
        Главная
      </Link>
      <svg width="21" height="9" viewBox="0 0 21 9" fill="none">
        <path
          d="M20.3536 4.85355C20.5488 4.65829 20.5488 4.34171 20.3536 4.14645L17.1716 0.964466C16.9763 0.769204 16.6597 0.769204 16.4645 0.964466C16.2692 1.15973 16.2692 1.47631 16.4645 1.67157L19.2929 4.5L16.4645 7.32843C16.2692 7.52369 16.2692 7.84027 16.4645 8.03553C16.6597 8.2308 16.9763 8.2308 17.1716 8.03553L20.3536 4.85355ZM0 5H20V4H0V5Z"
          fill="#A1A0A0"
        />
      </svg>
      <Link to={adress} className="page_link">
        {name_page}
      </Link>
    </div>
  );
}

export default Block_pages;
