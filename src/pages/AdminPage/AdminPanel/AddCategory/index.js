import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Button from "../../../../components/Button";
import Spinner from "../../../../components/Spinner";
import * as actions from "../../../../redux/actions/categoriesAction";
import "./style.scss";
const AddCategory = (props) => {
  const [category, setCategory] = useState({
    name: null,
    description: null,
    userId: props.userId,
  });

  const changeHandler = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  const categoryNemeh = () => {
    props.addCategory(category);
  };

  return (
    <div className="add-category">
      <div className="add-category__name">
        <label>Категорийн нэр</label>
        <input
          autoComplete={false}
          onChange={changeHandler}
          autoFocus={true}
          type="text"
          name="name"
          placeholder="Категорийн нэрээ оруулна уу..."
        />
      </div>
      <div className="add-category__desc">
        <label>Категорийн тухай дэлгэрэнгүй</label>
        <textarea onChange={changeHandler} name="description" />
      </div>
      <div className="add-category__btn">
        {props.saving ? (
          <Spinner />
        ) : (
          <Button text="Нэмэх" onClick={categoryNemeh} />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    category: state.categoryReducer.category,
    saving: state.categoryReducer.saving,
    userId: state.registerReducer.user.id,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addCategory: (category) => dispatch(actions.addCategory(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCategory);
