import React, { useState, useEffect } from "react";
import Video from "./Video";
import ScreenControls from "./ScreenControls";
import db from "../firebase";
import {
  getFirestore,
  collection,
  query,
  getDocs,
  doc,
} from "firebase/firestore";
import "../App.css";

const App = () => {
  const [videos, setVideos] = useState([]);

  const getData = async () => {
    const colRef = collection(db, "videos");
    // console.log(colRef);
    const docsSnap = await getDocs(colRef);
    // console.log(docsSnap.docs);
    setVideos(docsSnap.docs.map((doc) => doc.data()));
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(videos);

  return (
    <div className="app">
      <div className="app_videos">
        <div className="menu_bar">
          <ScreenControls />
        </div>
        <div className="camera">
          <div className="lense1">
            <div className="lense_eye1"></div>
          </div>
          <div className="lense2">
            <div className="lense_eye2"></div>
          </div>
        </div>
        {videos.map(
          ({
            id,
            url,
            channel,
            description,
            song,
            likes,
            messages,
            shares,
          }) => (
            <Video
              key={id}
              url={url}
              channel={channel}
              song={song}
              likes={likes}
              messages={messages}
              description={description}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  );
};

export default App;
