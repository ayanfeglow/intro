import { Query, useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useState } from "react";

const Assignment = () => {
  const [users, setUsers] = useState("");
  const [gender, setGender] = useState("")

  const handlesUserData = async (users) => {
    const response = await axios.get(`https://randomuser.me/api/?results=${users}`);
    return response.data.results;
  };
  const handleGender = async (gender) => {
    const response = await axios.get(`https://api.genderize.io?name=${name}`);
    return response.data.results;
  };

  const { data: usersData, isLoading, isError} = useQuery({
    queryKey: ['userdata'],
    queryFn : ()=> handlesUserData(users)
  })
  const {data: userData} = useQuery({
    queryKey: ['usergender'],
    queryFn :()=> handleGender(gender)
  })
  if(isLoading){
    return <p>loading...</p>
  }
  
  if(isError){
    return <p>error while loading data</p>
  }

  return (
    <>
      <div>
        <h2>Random users</h2>
        <input
          type="text"
          placeholder="Enter the amount of users you want"
          onChange={(e) => setUsers(e.target.value)}
        />
        <button onClick={() => handlesUserData(users)}>click</button>
        
        <div>
          <h2>Genderize</h2>
          <button onClick={()=> handleGender(gender)}>display</button>
      </div>

        
          
        {   
           usersData && usersData.map((user, idx)=>{
                return(
                    <div key={idx}>
                        <img src={user.picture.large} alt="" />
                        <p>{user.name.title}, {user.name.first} {user.name.last} </p>
                    </div>
                )
            })
        }
      </div>
    </>
  );
};

export default Assignment;