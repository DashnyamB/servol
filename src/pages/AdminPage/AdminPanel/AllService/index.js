import { faSpinner, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import Spinner from "../../../../components/Spinner";
import * as actions from "../../../../redux/actions/servicesAction";

const baseUrl = "/bigadmin/services";
const AllServices = (props) => {
  const handleDelete = () => {};
  const serviceNemeh = () => {
    props.history.push(`${baseUrl}/add`);
  };

  useEffect(() => {
    props.getServices();
  }, []);
  return (
    <>
      <Button
        style={{ marginBottom: "1rem" }}
        variant="contained"
        color="primary"
        onClick={serviceNemeh}
      >
        Үйлчилгээ нэмэх
      </Button>
      <div>
        {props.loading ? (
          <div className="all-users__spinner">
            <Spinner />
          </div>
        ) : (
          <ul className="all-users__list">
            {props.services.map((service) => (
              <li key={service.id}>
                <Link to={`${baseUrl}/${service.id}`}>
                  <div className="all-users__name">{service.name}</div>
                  <div className="all-users__email">{service.price}</div>
                </Link>
                {!props.deleting ? (
                  <FontAwesomeIcon
                    style={{
                      marginLeft: "auto",
                      color: "#ff544e",
                      cursor: "pointer",
                    }}
                    onClick={() => handleDelete(service.id)}
                    size="lg"
                    icon={faTimesCircle}
                  />
                ) : (
                  <FontAwesomeIcon
                    style={{
                      marginLeft: "auto",
                      color: "#888888",
                      cursor: "pointer",
                    }}
                    spin
                    size="lg"
                    icon={faSpinner}
                  />
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    services: state.servicesReducer.services,
    loading: state.servicesReducer.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getServices: () => dispatch(actions.getServices()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AllServices));
