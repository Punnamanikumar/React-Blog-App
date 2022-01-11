import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CategoryContext } from "../context/Context";

const Bottom = () => {

  const [category]=useContext(CategoryContext);
  
  return (
    <div className="h1">
      <div>
        <div style={{margin:"2% 2% 2% 0%",color:"red"}}>You May Also Like</div><hr className="thhr" style={{marginLeft:"15px"}}/>
        <div className="flex2">
            <div className="hc1">
            {category.filter(data=>data.id==="3").map((latest)=>(
            <Link to="/tollywood" key={category.id} className="hcc1">
              <div className="himg"><img src={latest.img} alt="" /></div>
              <div className="c1h3"><h3>{latest.det}</h3></div>
              <div className="c1h5"><h5>{latest.date}</h5></div>
            </Link>
          ))}
          </div>
          <div className="hc1">
          {category.filter(data=>data.id==="6").map((latest)=>(
          <Link to='/technology' key={category.id} className="hcc1">
            <div className="himg"><img src={latest.img} alt="" /></div>
            <div className="c1h3"><h3>{latest.det}</h3></div>
            <div className="c1h5"><h5>{latest.date}</h5></div>
          </Link>
          ))}
            </div>
            <div className="hc1">
            {category.filter(data=>data.id==="10").map((latest)=>(
            <Link to="/jobs" key={category.id} className="hcc1">
              <div className="himg"><img src={latest.img} alt="" /></div>
              <div className="c1h3"><h3>{latest.det}</h3></div>
              <div className="c1h5"><h5>{latest.date}</h5></div>
            </Link>
          ))}
          </div><br/>
        </div>
      </div>
    </div>
  );
};

export default Bottom;

