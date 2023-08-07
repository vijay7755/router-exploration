import React, { useEffect, useState } from "react";
import { fetchUsers } from "../../service/UsersAPI";
import { useSelector } from "react-redux";
import { selectCount } from "../../store/reducer/counter";


function Home(props) {
  console.log("home props: ", props);

  const [users, setUsers] = useState([]);
  const count = useSelector(selectCount);
  console.log("state: ", count)

  useEffect(async () => {
    const users = await fetchUsers();
    setUsers(users?.data);
  }, []);

  const userRenderer = (r) => {
    const userList = [];
    for (let i = 0; i < count; i++) {
      userList.push(r[i]?.name);
    }
    return userList;
  };

  const renderUser = (ur) => {
    console.log("ur: ", ur);
    return (
      <>
        {/* {ur.map((user) => {
          return <li>{user?.name}</li>;
        })} */}
        {userRenderer(ur).map((user, i) => {
          return <li key={i}>{user}</li>;
        })}
      </>
    );
  };

  return (
    <div>
      <h2>Users</h2>
      <br />
      <ul>{users.length ? renderUser(users) : <p>Loading...</p>}</ul>
    </div>
  );
}

export default Home;
