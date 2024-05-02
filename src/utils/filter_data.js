import React from "react";

const filter_data = (category, dynamicPosts) => {
  // Filter function for "Best" category
  const filterBest = (posts) => {
    return posts.sort((postA, postB) => {
      const ratioA = postA.likeCount / (postA.dislikeCount || 1);
      const ratioB = postB.likeCount / (postB.dislikeCount || 1);
      return ratioB - ratioA;
    });
  };

  const filterHot = (posts) => {
    return posts.sort((postA, postB) => {
      const diffA = Math.abs(postA.likeCount - postA.dislikeCount);
      const diffB = Math.abs(postB.likeCount - postB.dislikeCount);
      return diffA - diffB;
    });
  };

  const filterNew = (posts) => {
    return posts.sort((postA, postB) => {
      console.log("date", Date(postB.createdAt));
      return new Date(postB.createdAt) - new Date(postA.createdAt);
    });
  };

  const filterTop = (posts) => {
    return posts.sort((postA, postB) => {
      return postB.likeCount - postA.likeCount;
    });
  };

  let filteredPosts;
  switch (category) {
    case "Best":
      filteredPosts = filterBest(dynamicPosts);
      break;
    case "Hot":
      filteredPosts = filterHot(dynamicPosts);
      break;
    case "New":
      filteredPosts = filterNew(dynamicPosts);
      break;
    case "Top":
      filteredPosts = filterTop(dynamicPosts);
      break;
    default:
      filteredPosts = dynamicPosts; // Default to the original array
  }

  return filteredPosts;
};

export default filter_data;
