import { useState } from "react";
import { sculptureList } from "./data";

const Gallery = () => {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  let hasPrev = index > 0;
  let hasNext = index < sculptureList.length - 1;

  const handlePrevClick = () => hasPrev && setIndex(index - 1);
  const handleNextClick = () => hasPrev && setIndex(index + 1);

  let sculpture = sculptureList[index];
  const { name, artist, description, url, alt } = sculpture;

  return (
    <div>
      <button onClick={handlePrevClick} disabled={!hasPrev}>
        Previous
      </button>
      <button onClick={handleNextClick} disabled={!hasNext}>
        Next
      </button>
      <h2 className="title">
        <i>{name}</i>
        by {artist}
      </h2>
      <h3>
        {index + 1} of {sculptureList.length}
      </h3>

      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore && <p>{description}</p>}
      <div>
        <img src={url} alt={alt} />
      </div>
    </div>
  );
};

export default Gallery;
