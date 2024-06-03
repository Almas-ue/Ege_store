import React, { useState } from "react";
import Data from "../../../data/data";

function Liked() {
  const [data, setData] = useState(Data());

  const handleToggleLike = (index) => {
    console.log(index);
    const newData = [...data];
    newData[index].like = !newData[index].like;
    setData(newData);
    console.log(data);
  };

  return (
    <>
      {data.map((item, index) => {
        return (
          <button
            onClick={() => {
              handleToggleLike(index);
            }}
            className="card__heart"
          >
            <svg width="24" height="39" viewBox="0 0 24 39" fill="none">
              <path
                d="M20.84 12.1099C20.3292 11.5989 19.7228 11.1935 19.0554 10.917C18.3879 10.6404 17.6725 10.498 16.95 10.498C16.2275 10.498 15.5121 10.6404 14.8446 10.917C14.1772 11.1935 13.5708 11.5989 13.06 12.1099L12 13.1699L10.94 12.1099C9.9083 11.0782 8.50903 10.4986 7.05 10.4986C5.59096 10.4986 4.19169 11.0782 3.16 12.1099C2.1283 13.1416 1.54871 14.5408 1.54871 15.9999C1.54871 17.4589 2.1283 18.8582 3.16 19.8899L4.22 20.9499L12 28.7299L19.78 20.9499L20.84 19.8899C21.351 19.3791 21.7563 18.7727 22.0329 18.1052C22.3095 17.4378 22.4518 16.7224 22.4518 15.9999C22.4518 15.2774 22.3095 14.562 22.0329 13.8945C21.7563 13.2271 21.351 12.6206 20.84 12.1099V12.1099Z"
                stroke="#3C3C3B"
                strokeWidth="2"
              />
            </svg>
          </button>
        );
      })}
    </>
  );
}

export default Liked;
