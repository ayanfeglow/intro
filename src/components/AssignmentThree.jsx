import React, { useState } from "react";
import axios from "axios";

const AssignmentThree = () => {
  const [users, setUsers] = useState([]);
  const count = 5;


  const fetchData = async () => {
    try {
      const response = await axios.get(`https://randomuser.me/api/?results=${count}`);
      setUsers(response.data.results);
      localStorage.setItem("users", JSON.stringify(response.data.results));
    } catch (error) {
      console.error("Error fetching users:", error);
      const users = JSON.parse(localStorage.getItem("users"));
      setUsers(users)
      console.log(users)
    }
  };

  const clearAll = () =>{
    setUsers([])
  }
  const refetch = () =>{
    setUsers([])
    fetchData()
  };
  const removeUser = (id) => {
    const response = users.filter((user) => user.id !== id);
    setUsers(response);
  };
  localStorage.setItem("myname", "Ayanfe")
  localStorage.setItem("myage", 10)

  console.log(localStorage.getItem("myname"));
  console.log(localStorage.getItem("myage"));
  
  return (
    <div style={{ padding: "20px" }}>
      <button className="button" style={{ 
        marginBottom: "20px" }} onClick={fetchData}>Fetch Data</button>

      {
        users.map((user, index) => {
          return (
            <div
          key={index}
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "10px",
            maxWidth: "400px",
          }}
        >
         <div>
           <p><strong>Name:</strong> {user.name.first} {user.name.last}</p>
          <p><strong>Gender:</strong> {user.gender}</p>
          <p><strong>Country:</strong> {user.location.country}</p>
          <p><strong>Username:</strong> {user.login.username}</p>
          <p><strong>Location:</strong> {user.location.city}, {user.location.state}</p>
         </div>
         <button onClick={() => removeUser(user.id)}>Remove</button>
        </div>
          )
        })
      }
      <button onClick={clearAll}>clear all</button>
      <button onClick={refetch}>refetch</button>
    </div>
  );
};

export default AssignmentThree;