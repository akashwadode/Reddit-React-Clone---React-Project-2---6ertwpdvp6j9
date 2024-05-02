import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { useVote } from "../../context/VoteProvider";
import { useAuth } from "../../context/AuthProvider";

const Vote_Button = ({ postData, handleVoteClick }) => {
  //context
  const { authNavigator } = useAuth();
  const { getVoteState, updateVoteStatus } = useVote();

  //ref
  const upvoteRef = useRef();
  const downvoteRef = useRef();
  const btnContainerRef = useRef();

  //data var
  const postId = postData._id;
  // console.log(postId);
  const likeCount = postData.likeCount;
  const dislikeCount = postData.dislikeCount;
  const [voteCount, setVoteCount] = useState(likeCount - dislikeCount);
  const initVoteState = getVoteState(postId);
  const [voteCurState, setVoteCurState] = useState(getVoteState(postId));
  function toogleVoteSwitch(type) {
    switch (type) {
      case "upvote":
        if (voteCurState === "downvote") {
          setVoteCount(voteCount + 2);
        } else {
          setVoteCount(voteCount + 1);
        }
        upvoteRef.current.classList.add("active");
        downvoteRef.current.classList.remove("active");
        btnContainerRef.current.classList.add("green");
        btnContainerRef.current.classList.remove("red");
        handleVoteClick("upvote");
        break;

      case "downvote":
        if (voteCurState === "upvote") {
          setVoteCount(voteCount - 2);
        } else {
          setVoteCount(voteCount - 1);
        }
        downvoteRef.current.classList.add("active");
        upvoteRef.current.classList.remove("active");
        btnContainerRef.current.classList.add("red");
        btnContainerRef.current.classList.remove("green");
        handleVoteClick("downvote");
        break;

      default:
        setVoteCount(likeCount - dislikeCount);
        upvoteRef.current.classList.remove("active");
        downvoteRef.current.classList.remove("active");
        btnContainerRef.current.classList.remove("green");
        btnContainerRef.current.classList.remove("red");
        handleVoteClick("neutral");
    }
    updateVoteStatus(postId, type);
    setVoteCurState(type);
  }

  const handleClick = (type) => {
    if (authNavigator()) {
      if (type === "like") {
        if (!upvoteRef.current.classList.contains("active")) {
          // neutral => upvote
          toogleVoteSwitch("upvote");
        } else {
          // upvote => neutral
          toogleVoteSwitch("newtral");
        }
      } else {
        if (!downvoteRef.current.classList.contains("active")) {
          //  neutral => downvote
          toogleVoteSwitch("downvote");
        } else {
          // downvote => neutral
          toogleVoteSwitch("neutral");
        }
      }
    }
  };
  useEffect(() => {
    if (initVoteState === "upvote") {
      upvoteRef.current.classList.add("active");
      btnContainerRef.current.classList.add("green");
    } else if (initVoteState === "downvote") {
      downvoteRef.current.classList.add("active");
      btnContainerRef.current.classList.add("red");
    }else{
      
    }
  }, []);

  return (
    <div className="vote-button-container" ref={btnContainerRef}>
      <FontAwesomeIcon
        icon={faCaretUp}
        className="upvote icon"
        onClick={() => {
          handleClick("like");
        }}
        ref={upvoteRef}
      />
      <span>{voteCount}</span>
      <FontAwesomeIcon
        icon={faCaretDown}
        className="downvote icon"
        onClick={() => {
          handleClick("dislike");
        }}
        ref={downvoteRef}
      />
    </div>
  );
};

export default Vote_Button;
