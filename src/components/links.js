import React from "react";

export const Links = () => {
  return (<>
    <div className="bottom">
      <div className="links-container">
        <a href="https://github.com/StephanieGeraAmil">
          <img src="/links/Github.png" className="link" alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/stephanie-gera-60b6b5a0/">
          <img src="links/Linkedin.png" className="link" alt="linkedin" />
        </a>
        
      </div>
      <div className="attribution">
        <a  href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">
          <p> Artist</p>
        </a>
      </div>
    </div>
    </>
  );
};
// tambien usando reat router podria haber usado <Link to="https://github.com/Joeyryanbridges">
