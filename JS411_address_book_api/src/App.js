import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Person from './Person'

const baseUrl = 'https://randomuser.me/api?results=25';

export default function App() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    axios.get(baseUrl).then(response => {
      setUsers(response.data.results);
    });
  }, []);

  if (!users) return null;

  return (
    <div>
     <ul className="list">
      {users.map((user, index)=>{
         
        return <Person data={user} />
      })}

     </ul>
    </div>
  );
}
