import React from "react";

const popular_communities_config = () => {
  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://academics.newtonschool.co/api/v1/reddit/channel",
    headers: {
      projectId: "7k1ct68pbbmr",
    },
  };
  return config;
};

export default popular_communities_config;
