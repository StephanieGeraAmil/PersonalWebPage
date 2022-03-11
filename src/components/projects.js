import React ,{useState,useEffect}from 'react'
import { CurrentProject } from './currentProject';



export const Projects = () => {
    
    const initialArrayOfProjects=[
    {id:1, name: "Jars", photo:'/project-imgs/katt-yukawa-K0E6E0a0R3A-unsplash.jpg',link:"https://6202bcb18426d54989ed0c0f--lucid-agnesi-0d6296.netlify.app/"},
    {id:2,name: "Truth", photo:'/project-imgs/bible-unsplash.jpg',link:""},
        { id: 3, name: "Not Alone", photo: '/project-imgs/hannah-busing-Zyx1bK9mqmA-unsplash.jpg', link:"https://boring-allen-85a658.netlify.app/"}
    ];
    //https://elastic-kowalevski-f1c1a2.netlify.app/
    const [arrayOfProjects,setArayOfProjects]=useState(initialArrayOfProjects);
    
    let timer;
   
    const slideRight=()=>{
        clearInterval(timer);
        const arr=arrayOfProjects;
        arr.push( arr.shift() ) ;
        setArayOfProjects(arr.slice());
    }
    const slideLeft=()=>{ 
        clearInterval(timer);
       const arr=arrayOfProjects;
        arr.unshift( arr.pop() );
        setArayOfProjects(arr.slice()); //the slice is in order to change the array because react wasn't seeing any difference so the re-render wasnt happening    
    }
    useEffect(()=>{
       timer= setInterval(()=>{slideRight(); }, 5000);
         
    },[arrayOfProjects]);
    

    return (
        <div className='Project-section'>
            <div className='projectsTitle'>
            <h1>Projects</h1>
            </div>
            <div className='showroom'>
                    
                       
                        <button  data-aos="fade-right" data-aos-duration="500" className='prevbtn' onClick={()=>slideLeft()}>
                             <img src={arrayOfProjects[0].photo} className='side left' alt ={arrayOfProjects[0].name}/>  
                        </button>
                    
                        <CurrentProject proj={arrayOfProjects[1]}/>
                        
                        <button  data-aos="fade-left" data-aos-duration="500" className='nextbtn'onClick={()=>slideRight()}>
                             <img src={arrayOfProjects[2].photo} className='side right' alt ={arrayOfProjects[2].name}/>  
                        </button>
                  
                        
                  
                                  
            </div>               
        </div>
    )
}
 