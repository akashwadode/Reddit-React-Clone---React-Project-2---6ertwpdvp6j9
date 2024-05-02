

const homepage_posts_config = () => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://academics.newtonschool.co/api/v1/reddit/post?limit=100',
        headers: { 
          'projectId': '7k1ct68pbbmr'
        }
      };
      return config;
};

export default homepage_posts_config;
