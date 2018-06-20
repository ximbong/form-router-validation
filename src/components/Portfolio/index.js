import React from "react";

import "./index.css";

const Portfolio = () => {
  return (
    <form>
      <div className="sectionTitle">3.Portfolio</div>
      <div className="questions">
        Prove you're IBM's next great designer by showing us who you are. What
        you've done. How you think. Tell us your story.
      </div>
      <input type="url" placeholder="Portfolio link*" />
      <textarea name="name" placeholder="Anything else" defaultValue={""} />
      <button className="submitButton">Submit</button>
    </form>
  );
};

export default Portfolio;
