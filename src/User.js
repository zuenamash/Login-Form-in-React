import React, {useEffect,useState} from "react";
const User=()=>{
    const[user,setUser]=useState();
    const[loading,setLoading]=useState(false)
    useEffect(()=>{
        userData();
    },[])
    const userData=()=>{
        fetch("https://dummyjson.com/users")
        .then(res=>res.json())
        .then(data=>
            {
                setUser(data.users)
                setLoading(true)
                console.log("fetched data ------>",user) })
        .catch(e=>{throw new Error(e.message)})
    };
    if(!loading){   //if results to falses
        console.log("loading",loading)
        return(
            <div>loading......</div>
        )
    }
    return (
        <div>
       {user.map(item=>(
        <div>
            <img src={item.image}/>
        </div>
       ))
}
        </div>
    )
}
export default User;



































































// import React, { useEffect } from 'react';
// //  import React, {useEffect, useState} from 'react';

// import { useState } from 'react';
// // import User from './User';
// // import React,{useEffect} from 'react';

// const User =()=>{
//     const [User,setUser]= useState();
//     const[loading,setloading]=useState(false)
//     useEffect(()=>{
    
//         userdata();
//     }, {});
//     const userdata = ()=>{
//         fetch("https://dummyjson.com/users")
//         .then(res => res.json())
//         // setData(data)
//         .then(data =>{
//              console.log("fetched data ...>",(User))})
//         .catch(e =>
//              {throw new Error(e.message)
//             });
//     };
//     if(!loading){
//         return <div>loading..</div>
//     }
//     return (
//         <div>
//            { User.map(item=>{
//             <div>
//                 <img src= {item.image} alt='User profile'/>
//                 </div>
//            ))}
//                 </div>);
// };
// export default User;