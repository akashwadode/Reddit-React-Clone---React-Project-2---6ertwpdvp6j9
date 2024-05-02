const channel_details_config = (channelId) => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `https://academics.newtonschool.co/api/v1/reddit/channel/${channelId}`,
    headers: {
      projectId: "7k1ct68pbbmr",
    },
  };

  return config;
};
export default channel_details_config;
