import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'

const AssignmentTwo = () => {
    const [gender, setGender] = useState('')
    const handleGender = async(name)=>{
        const res = await axios.get(`https://api.genderize.io?name=${name}`)
        return res.data.gender;
    }
    const {data: genderData, isPending, isError, refetch} = useQuery({
        queryKey: ['gender'],
        queryFn : ()=>handleGender(gender)
    })
    if(isPending){
        return <p>loading...</p>
    }
    if (isError){
        return <p>Error occured while loading page</p>
    }
  return (
    <>
        <div>
            <input type="text" placeholder='Enter name' onChange={(e)=> setGender(e.target.value)}/>
            <button onClick={refetch}>Click</button>
        </div>
    </>
  )
}

export default AssignmentTwo