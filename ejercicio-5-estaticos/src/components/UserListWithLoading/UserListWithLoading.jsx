// UserList.jsx
import { useState, useEffect } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  
  return (
    <div>
      <h1>Usuarios</h1>
      <ul>
        {
            users.map(user => (
                <li key={user.id}>{user.name}
                    <h3>{user.address.city}</h3>
                </li>
            ))
        }
      </ul>
    </div>
  );
};

export default UserList;