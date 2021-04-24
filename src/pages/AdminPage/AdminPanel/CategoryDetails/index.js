import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Button from "../../../../components/GlobalComponents/Button";
import Spinner from "../../../../components/GlobalComponents/Spinner";
import * as actions from "../../../../redux/actions/categoriesAction";
import "./style.scss";
const CategoryDetails = (props) => {
  const [category, setCategory] = useState({});

  const changeHandler = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };
  useEffect(async () => {
    console.log(props);
    await props.getCategory(props.match.params.id);
    setCategory({ ...props.category });
  }, []);

  const saveCategory = () => {
    props.updateCategory(props.match.params.id, category);
  };
  return (
    <>
      {props.error && <div style={{ color: "red" }}>{props.error}</div>}
      {props.loading ? (
        <Spinner />
      ) : (
        <div className="category-details">
          <div className="category-details__left">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                alt="aaa"
              />
            </figure>
          </div>
          <div className="category-details__content">
            <div className="category-details__content__name">
              <label>Категорийн нэр</label>
              <input
                onChange={changeHandler}
                autoFocus={true}
                type="text"
                name="name"
                placeholder="Категорийн нэрээ оруулна уу..."
                value={category.name}
              />
            </div>
            <div className="category-details__content__desc">
              <label>Категорийн тухай дэлгэрэнгүй</label>
              <textarea
                onChange={changeHandler}
                name="description"
                value={category.description}
              />
            </div>
            <div className="category-details__content__btn">
              {props.saving ? (
                <Spinner />
              ) : (
                <Button onClick={saveCategory} text="Засах" />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    category: state.categoryReducer.category,
    loading: state.categoryReducer.loading,
    saving: state.categoryReducer.saving,
    error: state.categoryReducer.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getCategory: (catId) => dispatch(actions.getCategory(catId)),
    updateCategory: (catId, data) =>
      dispatch(actions.updateCategory(catId, data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CategoryDetails);
