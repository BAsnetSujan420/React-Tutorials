import React, { useState, useRef } from "react";

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const ref = useRef(null);

  function handleClick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);

    if (nextIsPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }
  return (
    <div>
      <video width="300" ref={ref}>
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
      <div>
        <button onClick={handleClick}>{isPlaying ? "Pause" : "Play"}</button>
      </div>
    </div>
  );
};

export default VideoPlayer;
