import React from "react";

const Video = () => {
  return (
    <>
      <p>Video</p>
      <video controls width="250" src="/media/examples/flower.webm" />
      <video>
        <source src="/media/examples/flower.webm" type="video/webm" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    </>
  );
};

export default Video;
