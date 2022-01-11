import React, { useContext, } from "react";
import { Link } from "react-router-dom";
import { CategoryContext } from "../context/Context";
import Footer from "../footer/Footer";

const Home = () => {

  const [category]=useContext(CategoryContext);
  

  return (
    <div className="h1">
      <div className="grid1">
        <Link to="/nature" className="one"><img src="https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_960_720.jpg" alt="" /><div className="onet"> Look deep into nature, and then you will understand <br /> everything better. </div></Link>
        <Link to='/jobs' className="two"><img src="https://cdn.siasat.com/wp-content/uploads/2020/03/Cognizant-Chennai.webp" alt="" height={"250px"} width={"480px"}/><div className="twot"> Hyderabad:<br />  Good news for job seekers </div></Link>
        <Link to='/technology' className="three"><img src="https://exstatic-in.iqoo.com/Oz84QB3Wo0uns8j1/1587816779408/c755c360bb5ae623605579930919bb1a.png.webp" alt="" height={"350px"} width={"480px"} /><div className="threet"> iQOO UI:<br /> Android 12 Funtouch OS 12 </div></Link>
      </div>
      <div>
        <div>The Latest</div>
        <hr className="hlhr"/>
        <div className="flex2">
            <div className="hc1">
            {category.filter(data=>data.id==="1").map((latest)=>(
            <Link to="/tollywood" key={category.id} className="hcc1">
              <div className="himg"><img src={latest.img} alt="" /></div>
              <div className="c1h3"><h3>{latest.det}</h3></div>
              <div className="c1h5"><h5>{latest.date}</h5></div>
            </Link>
          ))}
          </div>
          <div className="hc1">
          {category.filter(data=>data.id==="5").map((latest)=>(
            <Link to='/technology' key={category.id} className="hcc1">
            <div className="himg"><img src={latest.img} alt="" /></div>
            <div className="c1h3"><h3>{latest.det}</h3></div>
            <div className="c1h5"><h5>{latest.date}</h5></div>
          </Link>
          ))}
            </div>
            <div className="hc1">
            {category.filter(data=>data.id==="9").map((latest)=>(
              <Link to="/nature" key={category.id} className="hcc1">
              <div className="himg"><img src={latest.img} alt="" /></div>
              <div className="c1h3"><h3>{latest.det}</h3></div>
              <div className="c1h5"><h5>{latest.date}</h5></div>
            </Link>
          ))}
          </div><br/>
        </div>
          <div style={{marginLeft:"-8.5%",marginTop:"2%"}}><Footer/></div>
        <div className="flex3">
        <div className="advs" ><img src="https://static-koimoi.akamaized.net/wp-content/new-galleries/2021/03/radhe-shyam-001.jpg" className="advr" alt="" /></div><br/>
            <div>Latest Articles</div>
            <hr className="hlhr"/>
            <div className="hc2">
            {category.filter(data=>data.id==="2").map((latest)=>(
              <Link to="/tollywood" key={category.id} className="hcc2">
              <div className="tollyi"><img src={latest.img} alt="" /></div>
              <div className="tollyt"><h3>{latest.det}</h3></div>
              <div className="c2h5"><h5>{latest.date}</h5></div>
            </Link>
          ))}
          </div><hr className="f50per"/>
          <div className="hc2">
          {category.filter(data=>data.id==="6").map((latest)=>(
          <Link to='/technology' key={category.id} className="hcc2">
            <div className="tollyi"><img src={latest.img} alt="" /></div>
            <div className="tollyt"><h3>{latest.det}</h3></div>
            <div className="c2h5"><h5>{latest.date}</h5></div>
          </Link>
          ))}
            </div><hr className="f50per"/>
            <div className="hc2">
            {category.filter(data=>data.id==="12").map((latest)=>(
            <Link to="/nature" key={category.id} className="hcc2">
              <div className="tollyi"><img src={latest.img} alt="" /></div>
              <div className="tollyt"><h3>{latest.det}</h3></div>
              <div className="c2h5"><h5>{latest.date}</h5></div>
            </Link>
          ))}
          </div><br/>
        </div>
      </div>
    </div>
  );
};

export default Home;
