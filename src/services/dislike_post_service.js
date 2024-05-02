import axios from "axios";

const dislike_post_service = async (postId) => {
  const token = sessionStorage.getItem("userToken");
  try {
    const response = await axios.delete(
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

export default dislike_post_service;
