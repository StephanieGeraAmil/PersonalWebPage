import React ,{useRef}from "react";
import Marquee from "react-fast-marquee";

export const Stack = () => {
  const arrayOfTech = useRef([
    { alt: "react", src: "/skills/REACT.svg" },
    { alt: "javascipt", src: "/skills/JS.svg" },
    { alt: "node", src: "/skills/NODE.svg" },
    { alt: "html5", src: "/skills/HTML5.svg" },
    { alt: "mongo", src: "/skills/MONGO.svg" },
    { alt: "css3", src: "/skills/CSS3.svg" },
    { alt: "redux", src: "/skills/REDUX.svg" },
    { alt: "postgres", src: "/skills/POSTGRE.svg" },
    { alt: "socket.io", src: "/skills/SOCKETIO.svg" },
    { alt: "sass", src: "/skills/SASS.svg" },
    { alt: "figma", src: "/skills/FIGMA.svg" },
    { alt: "typescript", src: "/skills/TS.svg" },
    { alt: "styled_components", src: "/skills/STYLED.svg" },
    { alt: "lambda", src: "/skills/LAMBDA.svg" },
    { alt: "material-ui", src: "/skills/MUI.svg" },
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
