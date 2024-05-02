import React, { useState } from "react";
import "./../styles/create_post_page.css";
import {
  faFileLines,
  faFlag,
  faImage,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import create_new_post from "../services/create_new_post";

const Create_Post_Page = () => {
  const [curPostType, setCurPostType] = useState("post");
  const updatePostType = (type) => {
    console.log(type);
    setCurPostType(type);
  };

  const PostTypeContainer = () => {
    const [postContent, setPostContent] = useState("");
    if (curPostType === "post") {
      return (
        <div>
          <header></header>
        </div>
      );
    } else if (curPostType === "image") {
      return <div></div>;
    } else {
      return <div></div>;
    }
  };

  const submitHandler = (e)=>{
    e.preventDefault();
    create_new_post("new1","nothing");
  }
  return (
    <div className="create-post-main-container">
      <section className="create-post-container">
        <p>Create a post</p>
        <form onSubmit={submitHandler}>
          <header className="create-post-header">
            <div
              className={curPostType === "post" ? "active" : null}
              onClick={() => updatePostType("post")}
            >
              <FontAwesomeIcon icon={faFileLines} />
              <span>Post</span>
            </div>
            <div
              className={curPostType === "image" ? "active" : null}
              onClick={() => updatePostType("image")}
            >
              <FontAwesomeIcon icon={faImage} />
              <span>Image</span>
            </div>
            <div
              className={curPostType === "link" ? "active" : null}
              onClick={() => updatePostType("link")}
            >
              <FontAwesomeIcon icon={faLink} />
              <span>Link</span>
            </div>
            <div className="poll">
              <FontAwesomeIcon icon={faFlag} />
              <span>Poll</span>
            </div>
          </header>
          <section>
            <input placeholder="Title"></input>
            <PostTypeContainer />
            <hr></hr>
            <div>
              <button type="submit">Post</button>
            </div>
          </section>
        </form>
      </section>
    </div>
  );
};

export default Create_Post_Page;
