import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./styles.scss";
import * as actions from "../../../../redux/actions/registerAction";
import Spinner from "../../../../components/Spinner";
import SaveIcon from "@material-ui/icons/Save";
const AddUser = (props) => {
  const [userData, setUserData] = useState({
    email: null,
    username: null,
    lastname: null,
    firstname: null,
    password: null,
  });
  const [photo, setPhoto] = useState("");

  //   username, firstname, lastname, description, photo, email
  const photoHandler = (e) => {
    if (e.target.files[0]) setPhoto(e.target.files[0]);
  };
  const changeHandler = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const saveUser = () => {
    props.addUser(userData, photo);
  };
  return (
    <div className="add-user">
      <div className="add-user__fullname">
        <label>Овог, нэр</label>
        <div>
          <input
            required
            onChange={changeHandler}
            autoFocus={true}
            name="lastname"
            type="text"
            placeholder="Таний овог... "
          />
          <input
            required
            onChange={changeHandler}
            name="firstname"
            type="text"
            placeholder="Таний нэр... "
          />
        </div>
      </div>
      <div className="add-user__username">
        <label>Хэрэглэгнийн нэр, имэйл хаяг</label>
        <div>
          <input
            required
            onChange={changeHandler}
            name="username"
            type="text"
            placeholder="Хэрэглэгчийн нэрээ оруулна уу... "
          />
          <input
            name="email"
            required
            onChange={changeHandler}
            type="text"
            placeholder="Имэйл хаягаа оруулна уу... "
          />
        </div>
      </div>

      <div className="add-user__description">
        <label>Дэлгэрэнгүй мэдээлэл</label>
        <textarea
          required
          name="description"
          onChange={changeHandler}
          type="text"
          placeholder="Дэлгэрэнгүй мэдээлэл..."
        />
      </div>
      <div className="add-user__email">
        <label>Нууц үг</label>
        <input
          name="password"
          required
          onChange={changeHandler}
          type="password"
          placeholder="Нууц үгээ оруулна уу... "
        />
      </div>
      <div className="add-user__save-button">
        <label>Нүүр зураг оруулах</label>
        <div>
          <input type="file" name="photo" onChange={photoHandler} />
          {props.saving ? (
            <Spinner />
          ) : (
            <Button
              endIcon={<SaveIcon />}
              variant="contained"
              onClick={saveUser}
              color="primary"
            >
              Хадгал
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    saving: state.registerReducer.saving,
    success: state.registerReducer.success,
    error: state.registerReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (userData, photo) => dispatch(actions.AddUser(userData, photo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
