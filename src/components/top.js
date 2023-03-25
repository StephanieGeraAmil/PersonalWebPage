import React, { useContext, useEffect } from "react";

export const Top = () => {
  return (
    <div className="Top-section">
      <div className="Intro">
        <h2 className="Greeting">Hello.</h2>
        <div className="Name">
          <h1>I am</h1>
          <h1>Steph</h1>
        </div>
      </div>
      <div className="imageContainer">
        <img src="/girlAndDog.png" className="Top-avatar" alt="logo" />

        {/* <img
          id="laptop"
          className="rotateimg15"
          src="/casual-life-3d-rear-view-of-white-laptop-1.png"
          alt="laptop"
        /> */}

        <img
          id="books"
          src="/casual-life-3d-cat-lying-on-books.png"
          alt="books"
        />

        <img
          id="iceCream"
          className="rotateimg325"
          src="/casual-life-3d-chocolate-ice-cream-cone-mokup.png"
          alt="iceCream"
        />
        {/* <img
          id="guitar"
          className="rotateimg15"
          src="/casual-life-3d-front-view-of-guitar.png"
          alt="guitar"
        /> */}
        <img
          id="camera"
              className="rotateimg345"
          src="/casual-life-3d-front-view-of-pink-camera.png"
          alt="camera"
        />
        {/* <img
          id="cofee"
            src="/casual-life-3d-close-up-of-pink-coffee-cup.png"
            alt="cofee"
          /> */}
        {/* <img
          id="airplane"
            src="/3d-casual-life-airplane-1.png"
            alt="airplane"
          /> */}
        {/* <img
          id="paint"
           className="rotateimg40"
          src="/3d-casual-life-color-palette-and-brush.png"
          alt="paint"
        /> */}
        <img
          id="headphones"
           className="rotateimg15"
          src="/casual-life-3d-close-up-of-pink-headphones.png"
          alt="headphones"
        />
{/* 
        <img id="earth" src="/casual-life-3d-planet-earth-2.png" alt="earth" /> */}
      </div>
    </div>
  );
};
