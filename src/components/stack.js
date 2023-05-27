import React ,{useRef}from "react";
import Marquee from "react-fast-marquee";

export const Stack = () => {
  const arrayOfTech = useRef([
    { alt: "react", src: "/skills/REACT.png" },
    { alt: "javascipt", src: "/skills/JS.png" },
    { alt: "node", src: "/skills/NODE.png" },
    { alt: "html5", src: "/skills/HTML5.png" },
    { alt: "mongo", src: "/skills/MONGO.png" },
    { alt: "css3", src: "/skills/CSS3.png" },
    { alt: "redux", src: "/skills/REDUX.png" },
    { alt: "postgres", src: "/skills/POSTGRE.png" },
    { alt: "socket.io", src: "/skills/SOCKETIO.png" },
    { alt: "sass", src: "/skills/SASS.png" },
    { alt: "figma", src: "/skills/FIGMA.png" },
    { alt: "typescript", src: "/skills/TS.png" },
    { alt: "styled_components", src: "/skills/STYLED.png" },
    { alt: "lambda", src: "/skills/LAMBDA.png" },
    { alt: "material-ui", src: "/skills/MUI.png" },
  ]);

  return (
    <div className="Stack-section">
      <div className="tech-container">
        <Marquee pauseOnHover={true} gradient={false} speed={65}>
          {arrayOfTech.current.map((tech) => (
            <img
              src={tech.src}
              className="tech"
              title={tech.alt}
              alt={tech.alt}
              key={tech.alt}
            />
          ))}
        </Marquee>
      </div>
      <div data-aos="fade-left" data-aos-duration="1000" className="stackTitle">
        <h2>my Stack</h2>
      </div>
    </div>
  );
};
