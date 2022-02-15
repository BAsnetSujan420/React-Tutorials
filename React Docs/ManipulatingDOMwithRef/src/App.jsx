import { useRef } from "react";
import "./App.css";
import VideoPlayer from "./VideoPlayer";
import SearchButton from "./SearchButton";
import SearchInput from "./SearchInput";

function App() {
  const inputRef = useRef(null);

  return (
    <div className="App">
      <div className="search">
        <SearchButton
          onClick={() => {
            inputRef.current.focus();
          }}
        />
        <div>
          <SearchInput ref={inputRef} />
        </div>
      </div>
      <VideoPlayer />
    </div>
  );
}

export default App;
