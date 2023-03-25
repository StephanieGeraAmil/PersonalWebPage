import React,{useEffect} from 'react'
import Marquee from "react-fast-marquee";


export const Stack = () => {

     const initialArrayOfTech=[
        {alt: "react", src:'/icons-lightTheme/REACT.png'},
        {alt: "javascipt", src:'/icons-lightTheme/JS.png'},
        {alt: "node", src:'/icons-lightTheme/NODE.png'},
        {alt: "html5", src: '/icons-lightTheme/HTML5.png'},   
        {alt: "mongo", src:'/icons-lightTheme/MONGO.png'},
        {alt: "css3", src: '/icons-lightTheme/CSS3.png'},
         {alt: "redux", src: '/icons-lightTheme/REDUX.png'},
        {alt: "postgres", src: '/icons-lightTheme/POSTGRE.png'},
        {alt: "sass", src: '/icons-lightTheme/SASS.png' },
        {alt: "figma", src: '/icons-lightTheme/FIGMA.png'},
        {alt: "typescript", src: '/icons-lightTheme/TS.png'},
          {alt: "lambda", src: '/icons-lightTheme/LAMBDA.png'},
                    {alt: "material-ui", src: '/icons-lightTheme/MUI.png'}
    ];
   
    useEffect(() => {

        
    }, [])
   const handleClickOnTech=()=>{

   }

    return (
        <div className='Stack-section'>
            <div className="tech-container" >
            <Marquee gradient={false} speed={75}>
                {initialArrayOfTech.map((tech)=>(<img src={tech.src} className="tech" title={tech.alt} onClick={handleClickOnTech} key={tech.alt} />   ))}
            </Marquee> 
            </div>
            <div data-aos="fade-left" data-aos-duration="1000" className='stackTitle'>
                <h2 >my Stack</h2>
            </div>
            
            
        </div>
    )
}
