import React from 'react'


export const CurrentProject = ({proj}) => {
    return (
       <a href={proj.link}>
             <img src={proj.photo} className='current' alt ={proj.name}  />  
        </a>
    )
}
