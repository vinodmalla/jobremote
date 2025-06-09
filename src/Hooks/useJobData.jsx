import React from 'react'
import { useEffect } from 'react'
import { addjobData } from '../Redux/dataSlice'
import { useDispatch } from 'react-redux'

export default function useJobData() {
    const dispatct=useDispatch()
    const jobData=async()=>{
        const data=await fetch("https://remotive.com/api/remote-jobs")
        const json=await data.json()
        dispatct(addjobData(json?.jobs))
     
    }

    useEffect(()=>{
        jobData()
    },[])
  return (
    <div>
      
    </div>
  )
}
