import React from "react";
import axios from "axios";
import { useState } from "react";
import { useQueries } from "@tanstack/react-query";

const TanstackTwo = () => {
    const [name, setName] = useState('')
    const [nameTwo, setNameTwo] = useState('')

    const handleUserGender = async(name) =>{
        console.log(name)
        const response = await axios.get(`https://api.genderize.io?name=${name}`)
        return response.data.gender;
    }                                   
    const handleNationality = async(name) =>{
        const response = await axios.get(`https://api.nationalize.io/?name=${name}`)
        return (response.data.country[0]);
    }
    
    const results = useQueries({
        queries:[
            {
                queryKey:['gender'],
                queryFn: ()=> handleUserGender(name)
            },
            {
                queryKey:['nationality'],
                queryFn: ()=> handleNationality(nameTwo)
            }
        ]
    });
    const [genderQuery, nationalityQuery] = results;

    return(
        <>
        <h1>Genderize</h1>
            <div>
                <input type="text" placeholder="Enter Your Name" onChange={(e) => setName(e.target.value)}/>
                <button onClick={()=>handleUserGender(name)
                }>click</button>
            </div>
                {
                    genderQuery.isSuccess && <p>{name} is a {genderQuery.data}</p>
                }
            <h1>Nationalize</h1>
            <div>
                <input type="text" placeholder="Enter Your Name" onChange={(e) => setNameTwo(e.target.value)}/>
                <button onClick={()=>handleNationality(nameTwo)}>click</button>
            </div>
            {
                nationalityQuery.isSuccess && <p>{nameTwo} is from {nationalityQuery.data.country_id} with a probability of {nationalityQuery.data.probability}</p>
            }
        </>
    )
    
}

export default TanstackTwo;