import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from '@mui/icons-material/Search';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

import { useSelector } from "react-redux";

function Widgets() {

  const fname = useSelector((state) => state.fullname);

  return (
    <div className="widgets">
      {/* <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <InsertEmoticonIcon />
        <input placeholder="Search Twitter" type="text" />
        <p>Hello {fname}</p>
      </div> */}

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        {/* <TwitterTweetEmbed tweetId={"1566776240518098944"} /> */}

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="narendramodi"
          options={{ height: 500 }}
        />

        {/* <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
        /> */}
      </div>
    </div>
  );
}

export default Widgets;
