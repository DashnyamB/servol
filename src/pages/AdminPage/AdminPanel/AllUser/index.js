import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import Spinner from "../../../../components/GlobalComponents/Spinner";
import * as actions from "../../../../redux/actions/userAction";
import { faTimesCircle, faSpinner } from "@fortawesome/free-solid-svg-icons";
import "./styles.scss";
import { Button } from "@material-ui/core";

const baseUrl = "/bigadmin/users";

function AllUser(props) {
  useEffect(() => {
    props.getUsers();
    console.log("aaaa");
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    // props.deleteCategory(id);
    props.deleteUser(id);
  };

  const userNemeh = () => {
    props.history.push(baseUrl + "/add");
  };
  return (
    <>
      <Button
        style={{ marginBottom: "1rem" }}
        variant="contained"
        color="primary"
        onClick={userNemeh}
      >
        Хэрэглэгч нэмэх
      </Button>
      <div>
        {props.loading ? (
          <div className="all-users__spinner">
            <Spinner />
          </div>
        ) : (
          <ul className="all-users__list">
            {props.users.map((user) => (
              <li key={user.id}>
                <Link to={`${baseUrl}/${user.id}`}>
                  <div className="all-users__name">{user.username}</div>
                  <div className="all-users__email">{user.email}</div>
                  <div
                    className={`all-users__role ${
                      user.role === "admin" && "all-users__role--red"
                    }`}
                  >
                    {user.role}
                  </div>
                </Link>
                {!props.deleting ? (
                  <FontAwesomeIcon
                    style={{
                      marginLeft: "auto",
                      color: "#ff544e",
                      cursor: "pointer",
                    }}
                    onClick={() => handleDelete(user.id)}
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
}

const mapStateToProps = (state) => {
  return {
    users: state.usersReducer.users,
    loading: state.usersReducer.loading,
    deleting: state.userReducer.deleting,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(actions.getUsers()),
    deleteUser: (id) => dispatch(actions.deleteUser(id)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AllUser));
