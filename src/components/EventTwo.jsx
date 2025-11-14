import React from 'react'

const EventsTwo = () => {
  const handleClick = (data) =>{
    alert(data)
  }
  return (
    <>
      <div>
        <h1>My favourite footballer is Ronaldo</h1>
            <button onClick={()=>handleClick("speed says suuiiiiiiiiiiiiii")}>Click</button>
      </div>
    </>
  )
}

export default EventsTwo