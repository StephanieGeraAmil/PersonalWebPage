import React ,{useState,useEffect}from 'react'
import { CurrentProject } from './currentProject';



export const Projects = () => {
    
    const initialArrayOfProjects=[
    {id:1, name: "lallal1", photo:'/project-imgs/hannah-busing-Zyx1bK9mqmA-unsplash.jpg',link:""},
    {id:2,name: "lallalal2", photo:'/project-imgs/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg',link:""},
    {id:3,name: "lalaal3", photo:'/project-imgs/jon-tyson-YtYNavix3pw-unsplash.jpg',link:""},
    {id:4,name: "lalal4", photo: '/project-imgs/hannah-busing-Zyx1bK9mqmA-unsplash.jpg',link:""},   
    {id:5,name: "lalall5", photo:'/project-imgs/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg',link:""},
    {id:6,name: "lalal6", photo: '/project-imgs/jon-tyson-YtYNavix3pw-unsplash.jpg',link:""}
    ];
    
    const [arrayOfProjects,setArayOfProjects]=useState(initialArrayOfProjects);
    
    const slideRight=()=>{
        const arr=arrayOfProjects;
        arr.push( arr.shift() ) ;
        setArayOfProjects(arr.slice());
      

    }
    const slideLeft=()=>{
       const arr=arrayOfProjects;
        arr.unshift( arr.pop() );
        setArayOfProjects(arr.slice()); //the slice is in order to change the array because react wasn't seeing any difference so the re-render wasnt happening
        
    }

    return (
        <div className='Project-section'>
            <div className='projectsTitle'>
            <h1>Projects</h1>
            </div>
            <div className='showroom'>
                    
                       
                        <button onClick={()=>slideLeft()}>
                             <img src={arrayOfProjects[0].photo} className='side' alt ={arrayOfProjects[0].name}/>  
                        </button>
                    
                        <CurrentProject proj={arrayOfProjects[1]}/>
                        
                        <button onClick={()=>slideRight()}>
                             <img src={arrayOfProjects[2].photo} className='side' alt ={arrayOfProjects[2].name}/>  
                        </button>
                  
                        
                  
                                  
            </div>               
        </div>
    )
}
 