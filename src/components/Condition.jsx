import Events from './Events'
import Map from './Map'

const Condition = () => {
    const name = "Bayo"
    const nameTwo = "Ayanfe"

  return (
    <>
        <div>
            {
              name === "Bayo"
              && <Events/>
              

            }
            {
              nameTwo == "Ayanfe" ? <Map/> : <Events/>
            }
            
        </div>
    </>
  )
}

export default Condition