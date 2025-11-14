import React from 'react'

const PropsThree = (props) => {
    const { name , country } = props

    return(
        <div style={{backgroundColor: "rgb(90, 150, 90  )", fontStyle: "italic"}}>
            <h2>Hello, my name is {name} and i am from {country}.</h2>
        </div>
    )
}

export default PropsThree