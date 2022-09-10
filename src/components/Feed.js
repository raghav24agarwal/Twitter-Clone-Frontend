import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";
import FlipMove from "react-flip-move";
import SearchIcon from '@mui/icons-material/Search';

function Feed() {
  const [posts, setPosts] = useState([]);
  const [duplicate, setDuplicate] = useState([]);
  const axios = require('axios');

//   useEffect(() => {
//     db.collection("posts").onSnapshot((snapshot) =>
//       setPosts(snapshot.docs.map((doc) => doc.data()))
//     );
//   }, []);
    let temp;

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/tweets/').then(resp => {
        let reversedData = resp.data.reverse()
        setPosts([...reversedData])
        setDuplicate([...reversedData])
        console.log(posts)

        }).catch((err) => {
          alert("Server Error, Please try again!")
        });
    }, []);

    const saveTweet = (enteredTweet) => {
      const tweetData = {
        enteredTweet
      };
      setPosts([enteredTweet, ...posts]);
      setDuplicate([enteredTweet, ...posts])
      console.log("inside feed")
      console.log("tweetdata")
      console.log(tweetData)
      console.log("posts")
      console.log(posts)
    }

    const searchText = (e) => {
      if (e.code === "Enter") { 
          // alert("Searching")

          const payload = {
            searchText: e.target.value
          }
          axios.post('http://127.0.0.1:8000/tweets/search/',payload)
        .then((res) => {
          console.log(res)
          let reversedData = res.data.reverse()
        setPosts([...reversedData])
        })
      
      }

      if (e.target.value.length === 1 && e.code === "Backspace") {
        setPosts(duplicate)
      }
    }

  return (
    <div className="feed">
      <div className="feed__header">
        {/* <h2>Home</h2> */}
        <div className="feed__searchBox">
          <SearchIcon className="widgets__searchIcon" />
          <input placeholder="Search Twitter" type="text" onKeyDown={searchText}/>
        </div>
      </div>
      <TweetBox onTweet={saveTweet}/>


      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.tweet}
            displayName={post.fullname}
            username={post.username}
            verified={true}
            text={post.tweet}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
