import "./Home.scss";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
  }, []);

  return (
    <div>
      <h1>Users</h1>
     { users.length>0 && (<ul>
          { users.map((user) => (
<li key = {user.id}>
  <Link to = {`/users/${user.id}`}>{user.name}</Link>
</li>
          )) }
      </ul>)}

    </div>
  )
}

export default Home;