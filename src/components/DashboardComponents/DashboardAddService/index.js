import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as servicesActions from "../../../redux/actions/servicesAction";
import * as parentCategoriesActions from "../../../redux/actions/parentCategories";
import * as childCategoriesActions from "../../../redux/actions/childCategories";
import DropdownMenu from "../../GlobalComponents/DropdownMenu";
import Input from "../../GlobalComponents/Input";
import InputFile from "../../GlobalComponents/InputFile";
import Slider from "../../GlobalComponents/Slider";
import "./style.scss";
import TextArea from "../../GlobalComponents/TextArea";
const DashboardAddService = (props) => {
  const [service, setService] = useState({
    name: null,
    shortDesc: null,
    description: null,
    price: null,
    categoryId: null,
  });

  const [photos, setPhotos] = useState([]);

  const changeHandler = (e) => {
    setService({ ...service, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    props.getParentCategories();
  }, []);

  const getChildCategories = (id) => {
    props.getChildCategories(id);
  };

  const uploadService = () => {
    props.uploadService(service);
  };
  const chooseCategory = (id) => {
    setService({ ...service, categoryId: id });
  };
  const photoHandler = (e) => {
    const url = URL.createObjectURL(e.target.files[0]);
    setPhotos([...photos, url]);
    console.log(photos);
  };
  return (
    <div className="dashboard-add-service">
      <div>
        <div className="dashboard-add-service__name">
          <label>Үйлчилгээний нэр</label>
          <div className="dashboard-add-service__name__content">
            <Input
              type="text"
              placeholder="Үйлчилгээний нэр"
              name="name"
              onChange={changeHandler}
            />
            <div>
              <DropdownMenu
                initialValue="Kатегори"
                onListClick={getChildCategories}
                data={props.parentCategories}
              />
            </div>
            <div>
              <DropdownMenu
                initialValue="Дэд категори"
                onListClick={chooseCategory}
                data={props.childCategories}
              />
            </div>
          </div>
        </div>
        <div className="dashboard-add-service__short-desc">
          <label>Үйлчилгээний товч мэдээлэл</label>
          <TextArea
            name="shortDesc"
            placeholder="Товч мэдээлэл"
            onChange={changeHandler}
          />
        </div>
        <div className="dashboard-add-service__description">
          <label>Үйлчилгээний дэлгэрэнгүй мэдээлэл</label>
          <TextArea
            name="description"
            placeholder="Үйлчилгээний дэлгэрэнгүй мэдээлэл"
            onChange={changeHandler}
          />
        </div>

        <div className="dashboard-add-service__price">
          <label>Үнэ</label>
          <div className="dashboard-add-service__price__container ">
            <Input
              type="number"
              placeholder="Үнэ"
              name="price"
              onChange={changeHandler}
            />
          </div>
        </div>
        <Button variant="contained" color="primary" onClick={uploadService}>
          Нийтлэх
        </Button>
      </div>
      <div>
        <Slider images={photos} />
        <InputFile label="Зургаа оруулна уу" onChange={photoHandler} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    parentCategories: state.parentCategoriesReducer.parentCategories,
    childCategories: state.childCategoriesReducer.childCategories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    uploadService: (data) => dispatch(servicesActions.addService(data)),
    getParentCategories: () =>
      dispatch(parentCategoriesActions.getParentCategories()),
    getChildCategories: (id) =>
      dispatch(childCategoriesActions.getChildCategories(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardAddService);
