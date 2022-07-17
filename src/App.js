import React, { useState, useEffect } from "react";
import Video from "./Video";
import db from "./firebase";
import {
  collection,
  getDocs,
  query,
  onSnapshot,
  doc,
} from "firebase/firestore";
import "./App.css";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const querySnapshot = query(collection(db, "videos"));
    console.log(querySnapshot.collection(db, "videos"));
    // q.docs.map((doc) => {
    //   console.log(`${doc.id} => ${doc.data()}`);
    // });
    // const q = query(collection(db, "videos"));
    // console.log(q);
    // const unsub = onSnapshot(q, (querySnapshot) => {
    // console.log(
    //   "Data",
    //   querySnapshot.docs.map((d) => doc.data())
    // );
    // });
  }, []);

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
}

export default App;
