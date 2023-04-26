import React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { User } from "../User/User";
import { Grid } from "../Grid/Grid";
import { getUsers, getAllUsers } from "../../services/usersApi";
import { Loader } from "../Loader/Loader";
import styles from "./Users.module.css";
const USERS = "users";
const PAGE = "page";
const TOTAL = "total";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setloading] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const savingPage = (page) => {
    localStorage.setItem(PAGE, JSON.stringify(page));
  };

  const savingTotal = (total) => {
    localStorage.setItem(TOTAL, JSON.stringify(total));
  };
  const savedPage = JSON.parse(localStorage.getItem(PAGE));

  const savedTotal = JSON.parse(localStorage.getItem(TOTAL));

  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      try {
        const data = await getUsers();

        localStorage.setItem(
          USERS,
          JSON.stringify(data.map((item) => ({ ...item, isfollow: false })))
        );

        setUsers(JSON.parse(localStorage.getItem(USERS)));
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

  useEffect(() => {
    const fu = async () => {
        setloading(true);
        try {
          const data = await getUsers(page);
          const res = data.map((item) => ({ ...item, isfollow: false }));
          localStorage.setItem(USERS, JSON.stringify([...users, ...res]));

          setUsers(JSON.parse(localStorage.getItem(USERS)));
          savingPage(page);
        } catch (error) {
          console.log(error);
          setError(error);
        } finally {
          setloading(false);
        }
      };
    if (page > 1) {
      fu()
    } else {
      const fufu = async () => {
        setloading(true);
        try {
          const data = await getAllUsers();
          savingTotal(data.length);
          setTotal(data.length);
        } catch (error) {
          console.log(error);
          setError(error);
        } finally {
          setloading(false);
        }
      };
      fufu()
    }
  }, [page]);

  const updateUser = (id) => {
    setUsers((users) => {
      const result = [];
      for (let i = 0; i < users.length; i += 1) {
        if (users[i].id === id) {
          const follow = users[i].isfollow;
          const counter = follow
            ? users[i].followers - 1
            : users[i].followers + 1;
          result.push({
            ...users[i],
            isfollow: !users[i].isfollow,
            followers: counter,
          });
        } else {
          result.push(users[i]);
        }
      }
      localStorage.setItem(USERS, JSON.stringify(result));
      return result;
    });
  };

  return (
    <>
      {loading && (
        <div>
          <Loader />
        </div>
      )}
      <Grid>
        {users &&
          users.map((user) => (
            <User updateUser={updateUser} {...user} key={user.id} />
          ))}
      </Grid>
      {savedPage < savedTotal / 3 && (
        <button
          className={styles.button}
          onClick={() => {
            if (savedPage) {
              setPage(savedPage + 1);
            } else {
              setPage((prev) => prev + 1);
            }
          }}
        >
          load more
        </button>
      )}
    </>
  );
};

// {
//   actualPage < totaluser / 3 && (
//     <Button
//       onClick={() => {
//         if (actualPage) {
//           setPage(actualPage + 1);
//         } else {
//           setPage((prev) => prev + 1);
//         }
//       }}
//     >
//       Load More
//     </Button>
//   );
// }


Users.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape().isRequired),
};
