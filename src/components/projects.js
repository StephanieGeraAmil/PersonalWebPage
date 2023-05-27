import React, { useState, useEffect, useRef} from "react";
import { CurrentProject } from "./currentProject";
let arrayOfProjects = [
  {
    id: 1,
    name: "Jars",
    photo: "/project-imgs/budget.png",
    link: "https://lucid-agnesi-0d6296.netlify.app",
  },
  {
    id: 2,
    name: "Truth",
    photo: "/project-imgs/bible-unsplash.jpg",
    link: "https://elastic-kowalevski-f1c1a2.netlify.app",
  },
  {
    id: 3,
    name: "Not Alone",
    photo: "/project-imgs/friends.png",
    link: "https://fight-loneliness.com/",
  },
];
export const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  let intervalRef = useRef(null);

  const determineNextIndex = () => {
    if (currentIndex === 2) {
      return 0;
    } else {
      return currentIndex + 1;
    }
  };
  const determinePrevIndex = () => {
    if (currentIndex === 0) {
      return 2;
    } else {
      return currentIndex - 1;
    }
  };
  let prev = determinePrevIndex();
  let next = determineNextIndex();
  const slideRight = () => {
    setCurrentIndex(next);
  };
  const slideLeft = () => {
     setCurrentIndex(prev);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      slideRight();
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, [currentIndex]);

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
            src={arrayOfProjects[prev].photo}
            className="side"
            title={arrayOfProjects[prev].name}
            alt={arrayOfProjects[prev].name}
      
          />
        </button>

        <CurrentProject proj={arrayOfProjects[currentIndex]} />

        <button
          data-aos="fade-left"
          data-aos-duration="500"
          className="nextbtn"
          onClick={() => slideRight()}
        >
          <img
            src={arrayOfProjects[next].photo}
            className="side"
            alt={arrayOfProjects[next].name}
            title={arrayOfProjects[next].name}
     
          />
        </button>
      </div>
    </div>
  );
};
