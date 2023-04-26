import React, { useState, useEffect } from "react";
import { CurrentProject } from "./currentProject";
let arrayOfProjects = [
    {
      id: 1,
      name: "Jars",
      photo: "/project-imgs/katt-yukawa-K0E6E0a0R3A-unsplash.jpg",
      link: "lucid-agnesi-0d6296.netlify.app",
    },
    {
      id: 2,
      name: "Truth",
      photo: "/project-imgs/bible-unsplash.jpg",
      link: "elastic-kowalevski-f1c1a2.netlify.app",
    },
    {
      id: 3,
      name: "Not Alone",
      photo: "/project-imgs/hannah-busing-Zyx1bK9mqmA-unsplash.jpg",
      link: "https://fight-loneliness.com/",
    },
  ];
export const Projects = () => {
  
  //https://elastic-kowalevski-f1c1a2.netlify.app/
  const [shouldMove, setShouldMove] = useState(false);

  let timer;

  const slideRight = () => {
    clearInterval(timer);
    const elementToMove = arrayOfProjects.shift();
    arrayOfProjects.push(elementToMove);
    setShouldMove(!shouldMove);
  };
  const slideLeft = () => {
    clearInterval(timer);
    const elementToMove = arrayOfProjects.pop();
    arrayOfProjects.unshift(elementToMove);
    setShouldMove(!shouldMove);
  };
  useEffect(() => {
 
    timer = setInterval(() => {
      slideRight();
    }, 5000);
  }, [shouldMove]);

  return (
    <div className="Project-section">
      <div className="projectsTitle">
        <h1>Projects</h1>
      </div>
      <div className="showroom">
        <button
          data-aos="fade-right"
          data-aos-duration="500"
          className="prevbtn"
          onClick={() => slideLeft()}
        >
          <img
            src={arrayOfProjects[0].photo}
            className="side"
            title={arrayOfProjects[0].name}
            alt={arrayOfProjects[0].name}
          />
        </button>

        <CurrentProject proj={arrayOfProjects[1]} />

        <button
          data-aos="fade-left"
          data-aos-duration="500"
          className="nextbtn"
          onClick={() => slideRight()}
        >
          <img
            src={arrayOfProjects[2].photo}
            className="side"
            alt={arrayOfProjects[2].name}
            title={arrayOfProjects[2].name}
          />
        </button>
      </div>
    </div>
  );
};
