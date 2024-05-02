import React, { useState } from "react";
import { useAuth } from "../../context/AuthProvider";

const Join_Button = ({ channelId }) => {
  const { authNavigator } = useAuth();
  const existingArray = JSON.parse(sessionStorage.getItem("joinedChannels"));
  const [isValueExists, setIsValueExists] = useState(
    existingArray.includes(channelId)
  );

  const toggleValue = () => {
    if (authNavigator()) {
      setIsValueExists((prev) => !prev);
      const updatedArray = [...existingArray];
      const index = updatedArray.indexOf(channelId);
      if (index !== -1) {
        updatedArray.splice(index, 1);
      } else {
        updatedArray.push(channelId);
      }
      sessionStorage.setItem("joinedChannels", JSON.stringify(updatedArray));
    }
  };

  return (
    <button
      className={isValueExists ? "joined-btn" : "join-btn"}
      onClick={() => {
        toggleValue();
      }}
    >
      {isValueExists ? "Joined" : "Join"}
    </button>
  );
};

export default Join_Button;
