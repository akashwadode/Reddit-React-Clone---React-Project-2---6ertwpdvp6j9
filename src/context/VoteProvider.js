import React, { createContext, useContext, useEffect } from "react";
import { useAuth } from "./AuthProvider";
import like_post_service from "../services/like_post_service";
import dislike_post_service from "../services/dislike_post_service";

const VoteContext = createContext();

const VoteProvider = ({ children }) => {
  const createVoteObject = () => {
    if (!sessionStorage.getItem("voteStatus")) {
      const initialVoteStatus = {
        upvoted: [],
        downvoted: [],
      };
      sessionStorage.setItem("voteStatus", JSON.stringify(initialVoteStatus));
    }
  };

  const getVoteStatus = () => {
    const voteStatus = JSON.parse(sessionStorage.getItem("voteStatus"));
    return voteStatus ? voteStatus : { upvoted: [], downvoted: [] };
  };

  const updateVoteStatus = (postId, type) => {
    console.log(postId)
    let voteStatus = getVoteStatus();
    // Create a new object to store the updated vote status
    const newVoteStatus = {
      upvoted: [...voteStatus.upvoted],
      downvoted: [...voteStatus.downvoted],
    };
    if (type === "neutral") {
      newVoteStatus.upvoted = newVoteStatus.upvoted.filter(
        (id) => id !== postId
      );
      newVoteStatus.downvoted = newVoteStatus.downvoted.filter(
        (id) => id !== postId
      );
    } else if (type === "upvote") {
      newVoteStatus.downvoted = newVoteStatus.downvoted.filter(
        (id) => id !== postId
      );

      newVoteStatus.upvoted.push(postId);
      like_post_service(postId);
    } else {
      newVoteStatus.upvoted = newVoteStatus.upvoted.filter(
        (id) => id !== postId
      );
      newVoteStatus.downvoted.push(postId);
      dislike_post_service(postId);
    }

    // Update sessionStorage with the new object
    sessionStorage.setItem("voteStatus", JSON.stringify(newVoteStatus));
  };

  const getVoteState = (postId) => {
    const voteStatus = getVoteStatus();
    if (voteStatus.upvoted.includes(postId)) {
      return "upvote";
    } else if (voteStatus.downvoted.includes(postId)) {
      return "downvote";
    } else {
      return "neutral";
    }
  };

 
  return (
    <VoteContext.Provider
      value={{ getVoteStatus, updateVoteStatus, getVoteState }}
    >
      {children}
    </VoteContext.Provider>
  );
};
export const useVote = () => {
  return useContext(VoteContext);
};
export default VoteProvider;
