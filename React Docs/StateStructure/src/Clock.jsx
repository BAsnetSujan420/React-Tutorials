import { useState, useEffect } from "react";

function useTime() {}

const Clock = () => {
  const [time, setTime] = useState(() => new Date());
  const [color, setColor] = useState("hotpink");

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <p>
        Pick a color:
        <select value={color} onChange={(e) => setColor(e.target.value)}>
          <option value="hotpink">lightcoral</option>
          <option value="midnightblue">midnightblue</option>
          <option value="rebeccapurple">rebeccapurple</option>
        </select>
      </p>
      <h3 style={{ color: color }}>{time.toLocaleTimeString()}</h3>
    </div>
  );
};

export default Clock;
