import React from "react";
const Sound = require("react-sound").default;
// const song = require("../audio/Demon Slayer Kimetsu no Yaiba OP Full  鬼滅の刃 OP Full - Kurengeby LiSA.mp3");
const test =
  "http://developer.mozilla.org/@api/deki/files/2926/=AudioTest_(1).ogg";

const Audio = () => {
  return (
    <>
      <p>Audio</p>
      <audio src={test} autoplay controls>
        Your browser does not support the <code>audio</code> element.
      </audio>
    </>
  );
};

export default Audio;
