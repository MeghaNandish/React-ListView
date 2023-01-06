import { useState, useEffect } from "react";
import ListView from "./ListView";
import './SearchBox.css';

function SearchBox() {
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState("");

  // fetch data from API 
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://reqres.in/api/users?page=2");
      const json = await response.json();
      setData(json.data);
    }
    fetchData();
  }, []);

  const filteredData = data.filter((item) =>
    item.first_name.toLowerCase().includes(searchData.toLowerCase())
  );

  return (
    <div>
      <input
        type="text" className="input-form"
        placeholder="Search by first name"
        value={searchData}
        onChange={(event) => setSearchData(event.target.value)}
      />
      <ListView data={filteredData} />
    </div>
  );
}

export default SearchBox;
