import React from "react";
import styles from "./User.module.css";
import PropTypes from "prop-types";
// import { TiThumbsUp, TiThumbsDown } from 'react-icons/ti';
// import { formatDateToNow } from '../../helpers/formatDateToNow';
import { Button } from "../Button/Button";

export const User = ({ followers, tweets, user, avatar, id, updateUser }) => {
  return (
    <li className={styles.card}>
      <img className={styles.avatar} src={avatar} alt={user} />
      <div className={styles.cardWrapper}>
        <p>{tweets} TWEETS</p>
        <p>{followers} FOLLOWERS</p>
        <div className={styles.buttonBox}>
          <Button updateUser={updateUser} counter={followers} id={id}></Button>
        </div>
      </div>
    </li>
  );
};

User.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
};
