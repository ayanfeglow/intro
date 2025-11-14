import React, { useState } from 'react'

const FetchMethod = () => {
    const [data, setData] = useState([]);
    const [facts, setFacts] = useState([]);
    const [page, setPage] = useState(1);

    const fetchData = async()=>{
        const apiUrl = await fetch ('https://randomuser.me/api/?results=5')
        const response = await apiUrl.json();
        setData(response.results)
    }

    const fetchFacts = async () => {
        const apiUrl = await fetch(`https://catfact.ninja/facts?limit=5&page=${page}`)
        const response = await apiUrl.json();
        setFacts(response.data)
        setPage(page + 1)       
    }

    return (
    <>
        <div>
            <button onClick={fetchData}>Get Users</button>
            <button onClick={fetchFacts}>Get Cat Facts</button>
        </div>

        {/* Users */}
        {
            data.map((person, index) => {
                return(
                    <div key={index}>
                        <p>{person.name.title} {person.name.first} {person.name.last}</p>
                        <img src={person.picture.large} alt="" />
                    </div>
                )
            })
        }

        {/* Cat Facts */}
        {
            facts.map((fact, index) => {
                return(
                    <div key={index}>
                        <p>{fact.fact}</p>
                    </div>
                )
            })
        }
    </>
  )
}

export default FetchMethod