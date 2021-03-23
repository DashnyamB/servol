import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import Spinner from "../../../../components/Spinner";
import * as categoriesActions from "../../../../redux/actions/categoriesAction";
import * as categoryActions from "../../../../redux/actions/categoriesAction";
import { faTimesCircle, faSpinner } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";
import { Button } from "@material-ui/core";

const baseUrl = "/bigadmin/categories";

function AllCategory(props) {
  useEffect(() => {
    props.getCategories();
  }, []);

  const handleDelete = (id) => {
    props.deleteCategory(id);
  };

  const categoryNemeh = () => {
    props.history.push(`${baseUrl}/add`);
  };

  return (
    <section>
      <Button
        style={{ marginBottom: "1rem" }}
        variant="contained"
        color="primary"
        onClick={categoryNemeh}
      >
        Категори нэмэх
      </Button>
      <div>
        {props.loading ? (
          <div className="all-categories__spinner">
            <Spinner />
          </div>
        ) : (
          <ul className="all-categories__list">
            {props.categories.map((category) => (
              <li key={category.id}>
                <Link to={`${baseUrl}/${category.id}`}>
                  <div className="all-categories__name">{category.name}</div>
                </Link>
                {!props.saving ? (
                  <FontAwesomeIcon
                    style={{
                      marginLeft: "auto",
                      color: "#ff544e",
                      cursor: "pointer",
                    }}
                    onClick={() => handleDelete(category.id)}
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
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    categories: state.categoriesReducer.categories,
    loading: state.categoriesReducer.loading,
    saving: state.categoryReducer.saving,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: () => dispatch(categoriesActions.getCategories()),
    deleteCategory: (id) => dispatch(categoryActions.deleteCategory(id)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AllCategory));
