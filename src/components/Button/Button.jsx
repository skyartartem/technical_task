import classNames from "classnames";
import PropTypes from "prop-types";
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
      className={classNames(
        styles.button,
        isfollow ? styles.following : styles.follow
      )}
      type="button"
      onClick={onBtnHandleClick}
      id={id}
    >
      {isfollow ? "following" : "follow"}
    </button>
  );
};

Button.propTypes = {
  id: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  updateUser: PropTypes.func.isRequired,
  isfollow: PropTypes.bool,
};
