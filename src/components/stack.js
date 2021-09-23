import React,{useEffect} from 'react'
import Marquee from "react-fast-marquee";


export const Stack = () => {

     const initialArrayOfTech=[
        {alt: "react", src:'/icons-lightTheme/REACT.png'},
        {alt: "js", src:'/icons-lightTheme/JS.png'},
        {alt: "node", src:'/icons-lightTheme/NODE.png'},
        {alt: "html5", src: '/icons-lightTheme/HTML5.png'},   
        {alt: "mongo", src:'/icons-lightTheme/MONGO.png'},
        {alt: "css3", src: '/icons-lightTheme/CSS3.png'},
        {alt: "postgres", src: '/icons-lightTheme/POSTGRES.png'},
        {alt: "sass", src: '/icons-lightTheme/SASS.png' },
        {alt: "figma", src: '/icons-lightTheme/FIGMA.png'},
        {alt: "inkscape", src: '/icons-lightTheme/INKSCAPE.png'}
    ];
    useEffect(() => {

        
    }, [])
   

    return (
        <div className='Stack-section'>
            <div className="tech-container" >
            <Marquee pauseOnHover={true} gradient={false} speed={150}>
                {initialArrayOfTech.map((tech)=>(   <img src={tech.src} className="tech" alt={tech.alt} key={tech.alt} />   ))}
            </Marquee> 
            </div>
            <div data-aos="fade-left" data-aos-duration="1000" className='stackTitle'>
                <h2 >my Stack</h2>
            </div>
            
            
        </div>
    )
}
