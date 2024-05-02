import React from "react";
import "./../styles/home_aside_column.css";
import SecurityIcon from "@mui/icons-material/Security";
import { useNavigate } from "react-router-dom";
const Home_Aside_Container = () => {
  const navigate = useNavigate();
  const handleClickNavigate = (type) =>{
    // type "post" || "community"
    if(type === "post"){
      navigate('/create/post');
    }else{
      navigate('/create/channel');
    }
  }
  return (
    <div className="home-aside-right">
      <div className="aside item item-1">
        <section>
          {" "}
          <div>
            <SecurityIcon className="security-icon" />
          </div>
          <div>
            <h5>Reddit Premium</h5>
            <p>The best Reddit experience</p>
          </div>
        </section>
        <section>
          <button className="orange btn round-radius">Try Now</button>
        </section>
      </div>
      <div className="aside item item-2 ">
        <section>
          <div className="background-image-div"></div>
          <main>
            <div className="start-div">
              <div className="header">
                <div className="alien-icon-div"></div>
                <p>Home</p>
              </div>
              <p className="para">
                Your personal Reddit frontpage. Come here to check in with your
                favorite communities.
              </p>
            </div>
            <hr></hr>
            <div className="end-div">
              <button className="btn round-radius" onClick={()=>{
                handleClickNavigate("post")
              }}>Create Post</button>
              <button className="btn round-radius" onClick={()=>{
                handleClickNavigate("community")
              }}>Create Community</button>
              <hr></hr>

              <p>Reddit, Inc. © 2024. All rights reserved.</p>
            </div>
          </main>
        </section>
      </div>
     
    </div>
  );
};

export default Home_Aside_Container;
