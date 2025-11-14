import React from 'react'

const Storage = () => {
    localStorage.setItem("myname", "Ayanfe")
    localStorage.setItem("myage", 11)
    
    console.log(localStorage.getItem("myname"));
    console.log(localStorage.getItem("myage"));


    localStorage.removeItem("myname");
    localStorage.removeItem("myage");

  return (
    <>
        <div>
        
        </div>
    </>
  )
}

export default Storage