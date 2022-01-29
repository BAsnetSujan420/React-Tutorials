import { useState } from "react";
import { images } from "./data";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const hasNext = index < images.length - 1;

  function handleClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  let image = images[index];
  return (
    <div className="card">
      <div className="change-btn">
        <button onClick={handleClick}>Next</button>
      </div>
      <h3>
        Image {index + 1} of {images.length}
      </h3>
      <div className="imgBox">
        <img key={image.src} src={image.src} />
        <p>{image.place}</p>
      </div>
    </div>
  );
}
