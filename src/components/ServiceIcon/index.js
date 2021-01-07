import React from "react";
import "./style.scss";
const ServiceIcon = (props) => {
  return (
    <div className="service-icon">
      <a href="/">
        <figure>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40"
            viewBox="0 0 24 24"
            width="40"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2H0c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2h-4zM4 5h16v11H4V5zm8 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
          </svg>
        </figure>
        <h1>{props.title}</h1>
      </a>
    </div>
  );
};

export default ServiceIcon;