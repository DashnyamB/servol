import React, { useEffect, useState } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import "./style.scss";
import AllCategory from "./AllCategory";
import AddCategory from "./AddCategory";
import CategoryDetails from "./CategoryDetails";
import AllUser from "./AllUser";
import UserDetails from "./UserDetails";
import AddUser from "./AddUser";
import AllService from "./AllService";
import AddService from "./AddService";
import ServiceDetails from "./ServiceDetails";

const AdminPanel = (props) => {
  const [showAddBtn, setShowAddBtn] = useState(true);

  const addCategory = () => {
    props.history.push(`${props.baseUrl}/add`);
    setShowAddBtn(false);
  };
  const backCategory = () => {
    props.history.replace(`${props.baseUrl}`);
    setShowAddBtn(true);
  };

  return (
    <section className="admin-edit">
      <div className="admin-edit__title">
        <h1>{props.mongolCatNames[props.menu]}</h1>
      </div>
      <Switch>
        <Route
          path={`/bigadmin/categories/add`}
          exact
          component={AddCategory}
        />
        <Route path={`/bigadmin/categories/:id`} component={CategoryDetails} />
        <Route path={`/bigadmin/users/add`} exact component={AddUser} />
        <Route path={`/bigadmin/users/:id`} component={UserDetails} />
        <Route path={`/bigadmin/services/add`} exact component={AddService} />
        <Route path={`/bigadmin/services/:id`} component={ServiceDetails} />

        <Route
          path="/bigadmin/users"
          render={() => <AllUser menu={props.menu} />}
        />
        <Route
          path="/bigadmin/services"
          render={() => <AllService menu={props.menu} />}
        />
        <Route
          path="/bigadmin"
          render={() => <AllCategory menu={props.menu} />}
        />
      </Switch>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    mongolCatNames: state.categoriesReducer.mongolCatNames,
  };
};

export default connect(mapStateToProps)(withRouter(AdminPanel));
