import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import channel_details_config from "../config/channel_details_config";
import Join_Button from "./buttons/Join_Button";
import Random_Cover_Images from "./Random_Cover_Images";

const Channel_Header = ({ channelId }) => {
  const config = channel_details_config(channelId);
  const [headerData, setHeaderData] = useState([]);

  const { data, loading, error } = useAxios(config);
  if (error) {
    return <div>Some error occur !</div>;
  }

  useEffect(() => {
    if (data) {
      setHeaderData(data.data);
    }
  },[data]);
  return (
    <main className="channel-page-header">
     <Random_Cover_Images />
      <section className="channel-page-details">
        <div className="item-left">
          <img src={headerData.image}></img> <h1>r/{headerData.name}</h1>
        </div>
        <div className="item-right">
          <Join_Button channelId={channelId} />
        </div>
      </section>
    </main>
  );
};

export default Channel_Header;
