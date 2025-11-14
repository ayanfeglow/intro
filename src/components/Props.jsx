import React from 'react'
import PropsThree from "./PropsThree"
import PropsTwo from './PropsTwo'


const Props = (props) => {
  return (
    <>
      <div style={{backgroundColor: "rgb(190, 25, 30)"}}>
      <p>My name is {props.name} and i am {props.age} years today!!!</p>
      <p>My Email is {props.email} and my phone number is {props.number}</p>
      <PropsTwo name="Ayanfe" number="09139954290"/>
    </div>
    </>
  ) 
}


export default Props