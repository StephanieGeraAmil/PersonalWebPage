import React from 'react'


export const CurrentProject = ({proj}) => {
    return (
       <a href={proj.link}>
             <img src={proj.photo} srcSet={proj.srcset} className='current' alt ={proj.name}  />  
        </a>
    )
}
