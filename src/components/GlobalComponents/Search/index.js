import React from "react";
import "./style.scss";
const Search = (props) => {
  return (
    <div className="search">
      <div className="search__icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16.068"
          height="17.194"
          viewBox="0 0 18.068 19.194"
        >
          <rect width="18" height="18" fill="none" />
          <path
            d="M18.068,17.5l-3.75-3.984a8.608,8.608,0,0,0,1.591-5.07A8.163,8.163,0,0,0,7.954,0,8.163,8.163,0,0,0,0,8.45,8.163,8.163,0,0,0,7.954,16.9a7.486,7.486,0,0,0,4.773-1.69l3.75,3.984ZM2.273,8.45A5.81,5.81,0,0,1,7.954,2.414,5.81,5.81,0,0,1,13.636,8.45a5.81,5.81,0,0,1-5.682,6.036A5.81,5.81,0,0,1,2.273,8.45Z"
            fill="#222"
          />
        </svg>
      </div>
      <input
        type="text"
        className="search__input"
        placeholder={props.placeholder}
      />
      <div className="search__btn">
        <button>Хайх</button>
      </div>
    </div>
  );
};

export default Search;
