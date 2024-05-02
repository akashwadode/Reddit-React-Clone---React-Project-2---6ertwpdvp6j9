import axios from "axios";

const like_post_service = async (postId) => {
  const token = sessionStorage.getItem("userToken");
  try {
    const response = await axios.post(
      `https://academics.newtonschool.co/api/v1/reddit/like/${postId}`,
      {},
      {
        headers: {
          projectId: "7k1ct68pbbmr",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("Response:", response.data);
    // You can handle the response here
  } catch (error) {
    console.error("Error:", error);
    // You can handle errors here
  }
};

export default like_post_service;
