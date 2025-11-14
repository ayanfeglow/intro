import React from 'react'

const Events = () => {
    const handleClick = ()=> {
        window.alert("Button has been clicked")
    }
  return (
    <>
        <div>
            <h1>This is a button that displays an alert</h1>
            <button onClick={handleClick}>Alert</button>
        </div>
    </>
  )
}

export default Events