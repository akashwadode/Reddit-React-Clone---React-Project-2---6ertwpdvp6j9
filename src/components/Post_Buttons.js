import React from 'react'
import Vote_Button from './buttons/Vote_Button'
import "./../styles/post_buttons.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../context/AuthProvider';

const Post_Buttons = ({postData}) => {
  const {authNavigator} = useAuth();
  
  const handleVoteClick =(type) =>{
    // console.log(type);
    if(authNavigator()){

    }
  }
  return (
    <div className='post-buttons-container'>
      <Vote_Button postData={postData} handleVoteClick={handleVoteClick}/>
      <div className='comment-button-container'>
      <FontAwesomeIcon icon={faMessage} className='comment-btn'/>
      <span>{postData.commentCount}</span>
      </div>
      <div className='share-button-container'>
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='share-btn'/>
        <span>Share</span>
      </div>
    </div>
  )
}

export default Post_Buttons