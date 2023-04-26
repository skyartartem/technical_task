import classNames from "classnames";
// import PropTypes from "prop-types";
import React from "react";
import styles from "./Button.module.css";
import { postUsers } from "../../services/usersApi";


export const Button = ({ followers, id, isfollow, updateUser }) => {
  
  const onBtnHandleClick = () => {
    updateUser(id, isfollow);
    postUsers(id, followers, isfollow);
    
  };

  return (
    <button
      // disabled={isLoading}
      // className={classNames(styles.button)}
      className={classNames(
        styles.button,
        isfollow ? styles.following : styles.follow
      )}
      type="button"
      // counter={counter}
      onClick={onBtnHandleClick}
      id={id}
    >
      {isfollow ? "following" : "follow"}
    </button>
  );
};

// Button.propTypes = {
//   // children: PropTypes.node.isRequired,
//   counter: PropTypes.number.isRequired,
//   // role: PropTypes.string,
//   id: PropTypes.string.isRequired,
// };
