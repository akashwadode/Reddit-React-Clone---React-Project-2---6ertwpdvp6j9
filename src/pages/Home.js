import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthProvider";
import "./../styles/home.css";
import useAxios from "./../hooks/useAxios";
import Popular_Communities from "../components/Popular_Communities";
import homepage_posts_config from "../config/homepage_posts_config";
import Post_Container from "../components/Post_Container";
import Filter_Option_Container from "../components/Filter_Option_Container";
import filter_data from "../utils/filter_data";
import Home_Aside_Container from "../components/Home_Aside_Container";

const Home = () => {
  const { isLoggedIn } = useAuth();
  const { data, loading, error } = useAxios(homepage_posts_config());
  const [postData, setPostData] = useState([]);
  

  const [pageType, setPageType] = useState()
  const [activeFilterOption, setActiveFilterOption] = useState("Best");
  const changeActiveFilterOption = (option) => {
    setActiveFilterOption(option);
  };

  useEffect(() => {
    if (data) {
      setPostData(data.data);
    }
  }, [data]);

  const Render_Posts = ({ postData }) => {
    if (loading) {
      return <div>loading</div>;
    }
    if (error) {
      return <div> Some error occured</div>;
    }
    let filteredData = filter_data(activeFilterOption, postData);
    return (
      <main className="home-posts-container">
        {filteredData.map((item, index) => {
          return <Post_Container postData={item} key={index} page={"home"} />;
        })}
      </main>
    );
  };
  return (
    <div className="home-main-container">
      {!isLoggedIn ? (
        <section className="home-grid-container">
          <section className="grid-item-middle">
            <Render_Posts postData={postData} />
          </section>
          <aside className="grid-item-right">
            <Popular_Communities />
          </aside>
        </section>
      ) : (
        <section className="home-grid-container">
          <section className="grid-item-middle">
            <Filter_Option_Container
              changeActiveFilterOption={changeActiveFilterOption}
            />
            <Render_Posts postData={postData} />
          </section>
          <aside className="grid-item-right">
            <Home_Aside_Container />
          </aside>
        </section>
      )}
    </div>
  );
};

export default Home;
