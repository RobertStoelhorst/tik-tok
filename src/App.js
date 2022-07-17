import React, { useState, useEffect } from "react";
import Video from "./Video";
import db from "./firebase";
import {
  getFirestore,
  collection,
  query,
  getDocs,
  doc,
} from "firebase/firestore";
import "./App.css";

const App = () => {
  const [videos, setVideos] = useState([]);

  const getData = async () => {
    const colRef = collection(db, "videos");
    console.log(colRef);
    const docsSnap = await getDocs(colRef);
    docsSnap.forEach((doc) => {
      setVideos([doc.data()]);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  console.log("VIDEOS", videos);

  return (
    // BEM
    <div className="app">
      <div className="app__videos">
        {videos.map(
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
        )}
      </div>
    </div>
  );
};

export default App;
