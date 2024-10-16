import React, { useState, useEffect, useRef } from "react";
import { CurrentProject } from "./currentProject";
let arrayOfProjects = [
  {
    id: 1,
    name: "Jars",
    photo: "/project-imgs/budget-500.jpg",
    link: "https://budget-buddy-jar-app.netlify.app",
    srcset:
      "/project-imgs/budget-500.jpg, /project-imgs/budget-1000.jpg 700w, /project-imgs/budget-1500.jpg 1500w ",
  },
  {
    id: 2,
    name: "The Truth",
    photo: "/project-imgs/bible-500.jpg",
    link: "https://the-truth-site.netlify.app",
    srcset:
      "/project-imgs/bible-500.jpg, /project-imgs/bible-1000.jpg 700w, /project-imgs/bible-1500.jpg 1500w ",
  },
  {
    id: 3,
    name: "Faith Filled Friends",
    photo: "/project-imgs/friends-500.jpg",
    link: "https://fightingloneliness.netlify.app",
    srcset:
      "/project-imgs/friends-500.jpg , /project-imgs/friends-1000.jpg 700w, /project-imgs/friends-1500.jpg 1500w",
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
            srcSet={arrayOfProjects[prev].srcset}
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
            srcSet={arrayOfProjects[next].srcset}
          />
        </button>
      </div>
    </div>
  );
};
