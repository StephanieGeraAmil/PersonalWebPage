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
          src="cat_books.png"
          alt="books"
        />
        <img
          id="iceCream"
          className="rotateimg325"
          src="/icecream.png"
          alt="iceCream"
        />
        <img
          id="camera"
              className="rotateimg345"
          src="/camera.png"
          alt="camera"
        />
        <img
          id="headphones"
           className="rotateimg15"
          src="/headphones.png"
          alt="headphones"
        />
      </div>
    </div>
  );
};
