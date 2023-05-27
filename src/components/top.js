import React from "react";

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
        <img src="/girlAndDog.png" className="Top-avatar" alt="avatar" />
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
        <img
          id="camera"
              className="rotateimg345"
          src="/casual-life-3d-front-view-of-pink-camera.png"
          alt="camera"
        />
        <img
          id="headphones"
           className="rotateimg15"
          src="/casual-life-3d-close-up-of-pink-headphones.png"
          alt="headphones"
        />
      </div>
    </div>
  );
};
