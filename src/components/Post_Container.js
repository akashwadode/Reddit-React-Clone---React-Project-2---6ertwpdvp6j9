import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import "./../styles/post_container.css";
import { useNavigate } from "react-router-dom";
import format_date_time from "../utils/format_date_time";
import post_details from "../config/post_details";
import remove_space from "../utils/remove_space";
import Post_Buttons from "./Post_Buttons";

const Post_Container = ({ postData, page }) => {
  const navigate = useNavigate();

  if (page === "home") {
    // home page - Posts
    const channelId = postData?.channel?._id || "anything";
    const handleChannelClick = () => {
      navigate(`/channel/${channelId}`);
    };
    return (
      <main className="post-main-container" channel_id={channelId}>
        {postData && (
          <div>
            <div className="post-topbar">
              <div className="topbar-left">
                <img
                  src={
                    postData.channel && postData.channel.image
                      ? postData.channel.image
                      : null
                  }
                  className="channel-image"
                />
                <p onClick={handleChannelClick}>
                  <p>
                    <span className="channel-name" onClick={handleChannelClick}>
                      r/
                      {postData.channel && postData.channel.name
                        ? postData.channel.name
                        : "redditChannel"}
                      {"   "}
                    </span>
                    <span className="post-author">
                      by u/{remove_space(postData.author.name)}
                    </span>
                  </p>
                  <p>
                    <span className="post-time">
                      {format_date_time(postData.createdAt)}
                    </span>
                  </p>
                </p>
              </div>
              <div className="topbar-right">
                <button>Join</button>
              </div>
            </div>
            <div className="post-description">
              <p>{postData.content}</p>
            </div>
            {postData.images[0] && (
              <div className="post-asset">
                <img src={postData.images[0]} />
              </div>
            )}

            <div className="post-buttons">
              <Post_Buttons postData={postData} />
            </div>
          </div>
        )}
      </main>
    );
  } else {
    // channel page - Posts
    const config = post_details(postData._id);
    const { data, loading, error } = useAxios(config);
    const [channelPostData, setChannelPostData] = useState([]);
    useEffect(() => {
      if (data) {
        setChannelPostData(data.data);
      }
    }, [data]);
    return (
      <main className="post-main-container">
        {channelPostData.length !== 0 && (
          <div>
            <div className="post-topbar">
              <div className="topbar-left">
                <img
                  src={
                    channelPostData.images ? channelPostData.images[0] : null
                  }
                  className="channel-image"
                />
                <p>
                  <p>
                    <span className="post-author">
                      u/{remove_space(channelPostData.author.name)}
                    </span>
                    {"   "}
                  </p>
                  <p>
                    <span className="post-time">
                      {format_date_time(postData.createdAt)}
                    </span>
                  </p>
                </p>
              </div>
              <div className="topbar-right"></div>
            </div>
            <div className="post-description">
              <p>{channelPostData.content}</p>
            </div>
            {channelPostData.images[0] && (
              <div className="post-asset">
                <img src={channelPostData.images[0]} />
              </div>
            )}

            <div className="post-buttons">
              <Post_Buttons postData={channelPostData} />
            </div>
          </div>
        )}
      </main>
    );
  }
};

export default Post_Container;
