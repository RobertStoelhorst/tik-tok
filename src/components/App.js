import React, { useState, useEffect } from "react";
import Video from "./Video";
import db from "../firebase";
import "../App.css";
import ScreenControls from "./ScreenControls";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    //  fires once when the component loads and whenever video changes
    db.collection("videos").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="app">
      {/* BEM */}
      <div className="app_videos">
        <div className="menu_bar">
          <ScreenControls />
        </div>
        <div class="camera">
          <div className="lense1">
            <div className="lense_eye1"></div>
          </div>
          <div className="lense2">
            <div className="lense_eye2"></div>
          </div>
        </div>
        {/* {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              url={url}
              channel={channel}
              song={song}
              likes={likes}
              messages={messages}
              description={description}
              shares={shares}
            />
          )
        )} */}
      </div>
    </div>
  );
}

export default App;
