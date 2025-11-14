import React from 'react'
import PropsThree from './PropsThree'

const PropsTwo = (props) => {
  const { name, number} = props

  return (
    <div style={{backgroundColor: "rgb( 50, 150, 290)"}}>
      <h3>Hi call {name} through  this number : {number}.</h3>
      
      <PropsThree name="Ayanfe" country="Nigeria" />  
    </div>
  )
}

export default PropsTwo