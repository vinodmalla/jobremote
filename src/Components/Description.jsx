import React, { useEffect } from 'react'
//import { useState } from 'react';
import { useSelector } from 'react-redux'

export default function Description() {
    const description=useSelector((store)=>store.discription?.jobDiscription)
  
    {/*const [dataHtml,setDataHtml]=useState([]);
    async function CreateMarkup() {
        const data=await fetch("https://remotive.com/api/remote-jobs")
        const json=await data.json();
        console.log(json.jobs[0]?.description)
        setDataHtml([json?.jobs[0]?.description])
       

        
    }
    useEffect(()=>{
     CreateMarkup()
    },[])*/}
  
  return (
<div className='p-4 m-4'  dangerouslySetInnerHTML={{__html:description}} />
     

    
      
 
  )
}
