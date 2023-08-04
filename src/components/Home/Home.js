import React, { useEffect, useState } from "react";
import { fetchUsers } from "../../service/UsersAPI";

function Home(props) {
  console.log("home props: ", props);

  const [users, setUsers] = useState([]);

  useEffect(async () => {
    const users = await fetchUsers();
    setUsers(users?.data);
  }, []);

  const renderUser = (ur) => {
    console.log("ur: ", ur);
    return (
      <>
        {ur.map((user) => {
          return <li>{user?.name}</li>;
        })}
      </>
    );
  };

  console.log("users------: ", users);

  return (
    <div>
      <h2>Users</h2>
      <br />
      <ul>{users.length ? renderUser(users) : <p>Loading...</p>}</ul>
    </div>
  );
}

export default Home;
