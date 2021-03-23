import React from "react";
import { connect } from "react-redux";
import * as actions from "../../../../redux/actions/servicesAction";
function AddService(props) {
  return <div>aaaa</div>;
}

const mapDispatchToProps = (dispatch) => {
  return {
    addService: (serviceData) => dispatch(actions.addService(serviceData)),
  };
};

export default connect(
  /*mapStateToProps*/ null,
  mapDispatchToProps
)(AddService);
