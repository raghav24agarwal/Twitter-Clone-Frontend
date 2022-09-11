import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";

function TweetBox(props) {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const fname = useSelector((state) => state.fullname);
  const uname = useSelector((state) => state.username);
  const display = useSelector((state) => state.display);

  const axios = require('axios');

  const sendTweet = (e) => {
    e.preventDefault();

    if (tweetMessage === "") {
      alert("Please enter the tweet")
    } 

    else {

      const payload = {
          tweet: tweetMessage,
          username: uname,
          fullname: fname,
          avatar: display,
          image: tweetImage
      }

      axios('http://127.0.0.1:8000/tweets/',{
        method:'POST',
        data:payload,
      })
      .then((res) => {
          // console.log("Inside TweetBox")
          // console.log(res)
          props.onTweet(payload);
          
        
      }).catch((err) => {
        alert("Server Error")
      })

          setTweetMessage("");
          setTweetImage("");

    }
  };

  let first = fname.charAt(0).toUpperCase();

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          {/* <Avatar src={display} /> */}
          {display ? <Avatar src={display} /> : <Avatar>{first}</Avatar>}
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
