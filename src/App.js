import { useState } from "react";
import SearchBox from "./Components/SearchBox";

function App() {
  const [data, setData] = useState([]);

  return (
    <div>
      <SearchBox></SearchBox>
    </div>
  );
}

export default App;
