import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import Imagecard from "./Component/Imagecard/Imagecard";


const App = () => {
  const video = {
    thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    title: "Never Gonna Give You Up",
    channel: "Rick Astley"
  };

  return (
    <div>

      <main>
        {/* this is a main nav bar  */}
        <Navbar />
      
        {/* this is middle part */}
        <section style={{ display: "flex", justifyContent: "center", padding: "32px" }}>
          <Imagecard
            thumbnail={video.thumbnail}
            title={video.title}
            channel={video.channel}
          />
        </section>

        {/* this is the last part */}
        <footer></footer>
      </main>
    </div>
  );
};

export default App;