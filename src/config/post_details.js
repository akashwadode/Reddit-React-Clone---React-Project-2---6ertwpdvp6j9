const post_details = (postId) => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `https://academics.newtonschool.co/api/v1/reddit/post/${postId}`,
    headers: {
      projectId: "7k1ct68pbbmr",
    },
  };
  return config;
};

export default post_details;
