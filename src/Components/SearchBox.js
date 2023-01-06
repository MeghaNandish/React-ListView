import { useState,useEffect } from "react";
import ListView from "./ListView";

function SearchBox() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // fetch data from API as before
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://reqres.in/api/users?page=2");
      const json = await response.json();
      setData(json.data);
    }
    fetchData();
  }, []);

  const filteredData = data.filter((item) =>
    item.first_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by first name"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
      <ListView data={filteredData} />
    </div>
  );
}

export default SearchBox;
