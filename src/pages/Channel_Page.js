import React, { useEffect, useState } from "react";
import "./../styles/channel_page.css";
import useAxios from "../hooks/useAxios";
import { useParams } from "react-router-dom";
import Post_Container from "../components/Post_Container";
import "./../styles/home.css";
import Channel_Header from "../components/Channel_Header";
import channel_posts_config from "../config/channel_posts_config";

const Channel_Page = () => {
  const { channelId } = useParams();
  const config = channel_posts_config(channelId);
  const [channelData, setChannelData] = useState([]);
  const { data, loading, error } = useAxios(config);

  useEffect(() => {
    if (data) {
      setChannelData(data.data);
    }
  }, [data]);

  const Render_Posts = ({ channelData }) => {
    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (!channelData || channelData.length === 0) {
      return <div>No posts found</div>;
    }
    return (
      <main className="home-posts-container">
        {channelData.map((item, index) =>
          item ? (
            <Post_Container postData={item} key={index} page={"channel"} />
          ) : null
        )}
      </main>
    );
  };

  return (
    <main className="channel-page-container">
      <Channel_Header channelId={channelId} />
      <section className="channel-post-container">
        <section className="grid-item-middle">
          <Render_Posts channelData={channelData} />
        </section>
        <aside className="grid-item-right">{/* <Home_Aside_Column /> */}</aside>
      </section>
    </main>
  );
};

export default Channel_Page;
