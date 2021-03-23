import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../../../redux/actions/userAction";
import { Avatar } from "@material-ui/core";
import css from "./style.module.scss";
import { imageUrl } from "../../../../axios";

const UserDetails = (props) => {
  useEffect(() => {
    props.getUser(props.match.params.id);
  }, []);

  console.log(props.user);
  return (
    <section className={css.UserDetails}>
      <header className={css.Header}>
        <div className={css.Image}>
          <Avatar
            src={`${imageUrl}/${props.user.photo}`}
            alt={props.user.username}
            className={css.Large}
          />
          <p>
            Хэрэглэгчийн нэр : <span>{props.user.username} </span>
          </p>
        </div>
        <div
          style={{ borderLeft: "1px solid gray", paddingLeft: "1rem" }}
          className={css.Info}
        >
          <div className={css.Role}>
            <div>
              Таны эрх : <span>{props.user.role} </span>
            </div>
            <div>
              Таны түвшин : <span>{props.user.level}</span>
            </div>
          </div>
          <div className={css.ShortInfo}>
            <div>
              <p>
                Овог : <span>{props.user.lastname}</span>
              </p>
            </div>
            <div>
              <p>
                Нэр : <span>{props.user.firstname}</span>
              </p>
            </div>
            <div>
              <p>
                Имэйл : <span>{props.user.email}</span>
              </p>
            </div>
            <div>
              <p>
                Төрсөн он сар : <span>{props.user.birthday}</span>
              </p>
            </div>
            {/* ovog ner */}
            {/* username */}
            {/* email */}
          </div>
        </div>
      </header>
      <main className={css.Main}>
        <div>
          <label style={{ fontWeight: "700", textTransform: "uppercase" }}>
            Дэлгэрэнгүй мэдээлэл
          </label>
          <div
            style={{
              padding: "1rem",
              border: "1px solid gray",
              borderRadius: "5px",
              marginTop: "1rem",
            }}
          >
            {props.user.description ? (
              props.user.description
            ) : (
              <p style={{ fontSize: "14px", opacity: "0.7" }}>
                Дэлгэрэнгүй мэдээлэл алга
              </p>
            )}
          </div>
        </div>
        {/* desc */}
      </main>
    </section>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (id) => dispatch(actions.getUser(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
