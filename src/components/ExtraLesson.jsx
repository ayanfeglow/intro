import React from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const ExtraLesson = () => {

    const fetchCatFacts = async() => {
        const response = await axios.get("https://catfact.ninja/fact")
        return response.data.fact
    }

    const {data: fact, isLoading, isError, refetch} = useQuery({
        queryKey: ["fact"],
        queryFn: ()=>fetchCatFacts()
    })
    if(isLoading){
        return <p>Loading...</p>
    }
    if(isError){
        return <p>An Error occured while loading this page...</p>
    }
  return (
    <>
        <div>
            <button onClick={refetch}>click</button>
            <p>{fact}</p>
        </div>
    </>
  )
}

export default ExtraLesson