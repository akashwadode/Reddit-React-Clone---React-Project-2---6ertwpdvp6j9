
const channel_posts_config = (channelId) => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `https://academics.newtonschool.co/api/v1/reddit/channel/${channelId}/posts`,
    headers: {
      projectId: "7k1ct68pbbmr",
    },
  };
  return config;
};

export default channel_posts_config;
