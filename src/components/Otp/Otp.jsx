import React from 'react'
import "./Otp.css"
import { useState } from 'react'

const Otp = () => {
    const[loading,setloading]=useState(false)

    const handlesubmit=async(event)=>{
        event.preventDefault()
        setloading(true)
        const{email,Otp}=event.target.elements;
        let headersList={
            Accept:"*/*",
            "Content-Type":"application/json",
        };
        let bodyContent=JSON.stringify({
            email:email.value,
            otp:Otp.value,
        });
        let response = await fetch('http://127.0.0.1:4000/api/registerotp',{
            method:"post",
            mode:"cors",
            body:bodyContent,
            headers:headersList
        })

        let data=await response.json();
        console.log(data)
        let code=data.code
        if(code===404){
            alert('Yser not found')
        }

        if(code===200){
            alert('login successfull')
            settoken(data.data.token)
            setisAuth(data.data.token)
            Navigate("/")
        }
    }
  return (

    <div>
      <form onSubmit={(event)=>handlesubmit(event)}>
            <input type="placeholder" name="email" id="NameHolder" />
            <input type="placeholder" name="Otp" id="NameHolder" />
            <button className="Verify-otp">Verify Otp</button>
        </form>
    </div>
  )
}

export default Otp
