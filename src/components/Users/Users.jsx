import React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { User } from "../User/User";
import { Grid } from "../Grid/Grid";
import { getUsers } from "../../services/usersApi";

const USERS = "users";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    // getFunc();
    const fetchData = async () => {
      setloading(true);
      try {
        const data = await getUsers();
        setUsers(data);
        localStorage.setItem(USERS, JSON.stringify(data));
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setloading(false);
      }
    };

    const storedUsers = localStorage.getItem(USERS);

    if (storedUsers !== null) {
      setUsers(JSON.parse(storedUsers));
    } else {
      fetchData();
    }
  }, []);

  const updateUser = (id) => {
    setUsers(users => {
      const result = [];
      for (let i = 0; i < users.length; i += 1) {
        if (users[i].id === id) {
          result.push({...users[i], followers: users[i].followers+1});
        }
        else {result.push(users[i]);}
      }
      return result
      // const index = users.findIndex(user => user.id === id);
      // users[index].followers=++;
    });
    localStorage.setItem(USERS, JSON.stringify(users));
  };

  return (
    <>
      {loading && <div>loading...</div>}
      <Grid>
        {users &&
          users.map((user) => (
            <User updateUser={updateUser} key={user.id} {...user} />
          ))}
      </Grid>
    </>
  );
};

Users.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape().isRequired),
};
