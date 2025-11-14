import React, { useState } from 'react'
import data from "../consumable/birthday"


const BirthdayTwo = () => {

const [women, setWomen] = useState(data)
const clearall = () => {
    setWomen([])
}
const refetch = () => {
    setWomen(data)
}
const removePerson = (id) => {
    const response = women.filter((woman) => woman.id !== id);
    setWomen(response);
};

  return (
    <div>
        {
            women.map((woman, idx)=> {
                return(
                    <div key={idx}>
                    <img
                src={woman.imageUrl}
                alt={`${woman.name}'s image`}
                width={300}
              />
              <h1>{woman.name}</h1>
              <p>{woman.age} years old</p>
              <button onClick={()=>removePerson(woman.id)}>Remove</button>
                </div>
                )
            })
        }
        <button onClick={clearall}>clear all</button>
        <button onClick={refetch}>refetch</button>
    </div>
  )
}

export default BirthdayTwo