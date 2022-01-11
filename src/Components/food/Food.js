import * as React from "react";
import Bottom from "../bottom/Bottom";
// import { useContext } from "react";
// import { CategoryContext } from "../context/Context";

const Food = () => {
  // const [category] = useContext(CategoryContext);

  return (
    <div>
      <h1 className="tollyh">About Us</h1><hr className="thhr"/>
      <div className="name">
        <h1 className="nam">Punna <span className="na">ManiKumar</span></h1>
        <div className="social">
        <a href="https://www.facebook.com"><i class="fab fa-facebook-square"></i></a>
        <a href="https://www.instagram.com"><i class="fab fa-instagram-square"></i></a>
        <a href="https://www.twitter.com"><i class="fab fa-twitter-square"></i></a>
        <a href="https://www.linked.in"><i class="fab fa-linkedin"></i></a>
        <a href="https://www.github.com"><i class="fab fa-github-square"></i></a>
        </div>
        <div style={{marginLeft:"-10%"}}><Bottom /></div>
      </div>
    </div>
  );
};

export default Food;
