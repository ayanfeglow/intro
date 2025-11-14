import '../css/style.css'

const Style = () => {
    
        const myStyle = {
            textAlign: "center",
            margin: "auto",
            color: "purple",
        }
        const firstChild = {
            width: "47%",
            height: "80%",
            margin: "auto",
            display: "flex",
            alignContent: "center",
            textAlign: "center",
            backgroundColor: "yellowgreen",
            borderRadius: "10px"
        }
        const secondChild = {
            width: "47%",   
            display: "flex",
            height: "80%",
            margin: "auto",
            textAlign: "center" ,
            backgroundColor: "yellow",
            borderRadius: "10px"
        }
  return (
    
    <div>
        <h1 style={{textAlign: "center", fontSize: "2.2rem"}}>My name is Adekanye Ayanfe</h1>
        

        <p style={myStyle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt numquam quaerat sapiente ab, exercitationem provident. Error laboriosam esse saepe dolore.</p>

        <div className="main">
            <div className="first-clild"style={firstChild}>
                <h3 style={{margin: "100px 150px", fontSize: "1.5rem"}}>1st block</h3>
            </div>
            <div className="second-block"style={secondChild}>
                <h3 style={{margin: "100px 150px", fontSize: "1.5rem"}}>2nd block</h3>
            </div>
        </div>
    </div>
  )
}

export default Style