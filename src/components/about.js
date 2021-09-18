import React from 'react'


export const About = () => {
    return (
        
             <div className='About-section'>
                <div className="Rectangle">
                </div> 
                <div className='content-container'>
                    <>
                    <img src={"/photo.png"} className="Photo" alt="photo" />
                     </> 
                    
                    <div data-aos="fade-left" className='info'>
                        <div className='Titles'>
                            <h1>CS Engineer</h1>
                            <h1>Full Stack Dev</h1>
                        </div>
                        <h2 className='Identity'>Follower of Jesus Christ</h2>
                    
                    </div>
                </div>
            </div>
        
    )
}
