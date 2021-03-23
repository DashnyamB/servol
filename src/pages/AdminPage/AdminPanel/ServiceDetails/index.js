import React, { useEffect } from "react";
import { connect } from "react-redux";
import { imageUrl } from "../../../../axios";
import * as actions from "../../../../redux/actions/servicesAction";
import "./style.scss";
function ServiceDetails(props) {
  useEffect(() => {
    props.getService(props.match.params.id);
  }, []);
  return (
    <div className="service-details">
      <div className="service-details__name">
        <h1>
          Үйлчилгээний нэр : <span>{props.service.name}</span>
        </h1>
        <div>
          <div>
            Үнэ : <span>{props.service.price}</span>
          </div>
          <div>
            Үнэлгээ : <span>{props.service.rating}</span>
          </div>
          <div>
            Нийт захиалга : <span>{props.service.sumOrders}</span>
          </div>
        </div>
      </div>
      <div className="service-details__mid-content">
        <figure>
          <img
            src={`${imageUrl}/${props.service.photo}`}
            alt={props.service.name}
          />
        </figure>
        <div className="service-details__mid-content__short-desc">
          <h2>Товч тайлбар</h2>
          {props.service.shortDesc}
        </div>
      </div>
      <div className="service-details__description">
        <h2>Дэлгэрэнгүй тайлбар</h2>
        {props.service.description}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    service: state.serviceReducer.service,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getService: (id) => dispatch(actions.getService(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ServiceDetails);
