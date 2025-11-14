import { useQueries, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const Tanstack = () => {
  const [name, setName] = useState("");

  

   const fetchAge = async (name) => {
    try {
      const res = await axios.get(`https://api.agify.io?name=${name}`);
      setAgeData(res.data);
    } catch (error) {
      console.error("Error fetching data...");
    }
  };
  const { data: UserAge, isLoading, isError } = useQuery({
      queryKey: ["user"],
    queryFn: fetchAge,
  });
  if (isLoading) {
    return <p>loading...</p>;
  }
  if (isError) {
    return <p>Error occured while loading page...</p>;
  }

 

  return (
    <>
      <h1>Predict Age</h1>
      <p>Enter a name to predict the age of the person</p>
      <div>
        <strong>Name: {UserAge.name}</strong>
        <strong>Predicted Age: {UserAge.age}</strong>
      </div>
      

      <div>
        <input
          type="text"
          placeholder="Enter a name"
          onChange={(e) => setName(e.target.value)}
        />

        <button onClick={() => fetchAge(name)}>Get Age</button>

        
      </div>
    </>
  );
};

export default Tanstack;
