const Map = () => {
    const data = ["Glory","Prince","Esther","Godwin","Amaka"]
    // const handleClick = (name)=>{
    //     alert(`${name} "has clicked the button !!`)
    // }
    const dataTwo = [
        {
            firstname : "Ayanfe",
            age: "15",
            address: "10 Teddy str"
        },
        {
            firstname : "Ayanfe",
            age: "15",
            address: "10 Teddy str"
        },
        {
            firstname : "Ayanfe",
            age: "15",
            address: "10 Teddy str"
        }
    ]
    const showName = (data) => {
        alert(`my name is ${data}`)
    }
    const showAge = (data) => {
        alert(`i am ${data} years old`)
    }
    const showAddress = (data) => {
        alert(`i live in ${data} street`)
    }
    return (
        <>
    <div>
        {/* {
            data.map((name)=>{
                return(
                    <>
                        <h2>My name is {name}</h2>
                        <h2>{name} is my favourite classmate.</h2>
                        <button onClick={()=>handleClick(name)}>Click</button>
                    </>
                    
                )
            })
        } */}

        {/* assignment */}
        <h2>Assinment</h2>
        {
            dataTwo.map((user, idx)=>{
                return(
                    <div style={{display: "flex"}} key={idx}>
                        <p>My name is {user.firstname}</p>
                        <button onClick={()=>showName(user.firstname)}>Display Alert</button>
                        <p>I am {user.age} years old</p>
                        <button onClick={()=>showAge(user.age)}>Display Alert</button>
                        <p>I live in {user.address}.</p>
                        <button onClick={()=>showAddress(user.address)}>Display Alert</button>
                    </div>
                )
            })
        }
        
    </div>
    </>
  )
}

export default Map