import React, { useEffect, useState } from "react";
import "./../styles/popular_communities.css";
import useAxios from "../hooks/useAxios";
import popular_communities_config from "../config/popular_communities_config";
import Default_Channel_Icon from "./icons/Default_Channel_Icon";
import remove_space from "../utils/remove_space";

const Popular_Communities = () => {
  const { data, loading, error } = useAxios(popular_communities_config());

  if (loading) {
    return <div>loading</div>;
  }
  if (error) {
    return <div>Some error occured</div>;
  }
  const Communities_List = ({ data }) => {
    return (
      <div className="community-list">
        {data.reverse().map((item, index) => {
          const channelName = remove_space(item.name);
          return (
            <div className="list-item" key={index}>
              <div className="list-item-left">
                {item.image ? (
                  <img
                    src={item.image}
                    className="community-image channel-image"
                  />
                ) : (
                 <Default_Channel_Icon />
                )}
              </div>
              <div className="list-item-right">
                <p>r/{channelName}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <main className="popular-communities-main-container">
      <p>POPULAR COMMUNITIES</p>
      <Communities_List data={data.data} />
    </main>
  );
};

export default Popular_Communities;
