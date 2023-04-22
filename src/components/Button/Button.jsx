// import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import styles from "./Button.module.css";
import { postUsers } from "../../services/usersApi";
// import { useUpdateCommentCountMutation } from "../../redux/commentApi";

export const Button = ({ counter, id, updateUser }) => {
  // const variants = {
  //   [styles.thumbsUp]: role === "thumbsUp",
  //   [styles.thumbsDown]: role === "thumbsDown",
  // };

  // const [updateCommentCount, { isLoading }] = useUpdateCommentCountMutation();

  const onBtnHandleClick = () => {
    postUsers(id, counter);
    updateUser(id);
    // try {
    //   await updateCommentCount({ id, [role]: counter + 1 });
    // } catch (error) {
    //   console.log(error);
    // }
    console.log("click", id);
  };

  return (
    <button
      // disabled={isLoading}
      // className={classNames(styles.button)}
      className={styles.button}
      type="button"
      counter={counter}
      onClick={onBtnHandleClick}
      id={id}
    >
      FOLLOW
    </button>
  );
};

Button.propTypes = {
  // children: PropTypes.node.isRequired,
  counter: PropTypes.number.isRequired,
  // role: PropTypes.string,
  id: PropTypes.string.isRequired,
};
