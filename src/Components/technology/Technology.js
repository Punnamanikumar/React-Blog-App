import * as React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Bottom from "../bottom/Bottom";
import { CategoryContext } from "../context/Context";

const Technology = () => {
  const [category] = useContext(CategoryContext);


  return (
    <div>
      <h1 className="tollyh">Technology</h1><hr className="thhr"/>
      {category.filter((render)=>render.id>4 && render.id<9).map((tec) => (
        <div key={category.id} className="tolly">
          <Link to={`/technology/${tec.id}`} className="tolly">
          <div className="tollyi"><img src={tec.img} alt="" /></div>
          <h3 className="tollyt">{tec.det}</h3>
          </Link>
          <h5>{tec.date}</h5>
          <hr/>
        </div>
      ))}
      <div className="adv"><img src="https://static-koimoi.akamaized.net/wp-content/new-galleries/2021/03/radhe-shyam-001.jpg" className="adv" alt="" /></div><br/>
      <button className="loadmore">LoadMore</button>
      <Bottom/>
    </div>
  );
};

export default Technology;
