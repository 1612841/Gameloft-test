import React,{ useEffect, useState } from "react";

const platforms = [
  "Twitter",
  "Facebook",
  "Instagram"
];

function Search() {
 const [searchTerm, setSearchTerm] = useState("");
 const [searchResults, setSearchResults] = useState([]);
 const [show, setShow] = useState(false);

 const handleChange = event => 
    setSearchTerm(event.target.value);

 useEffect(() => {
    const results = platforms.filter(platform =>
      platform.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  },[searchTerm]);
const showResults = () => {
  setShow(true);
}
  return (
    <div className="search">
      <input
        style={{height:40 + "px",
        width: 233 +"px",
        borderRadius: 5 + "px",
        color: "#2699fb"
      }}
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <button className='btn' onClick={showResults}><i class="fas fa-search z-index-1"></i></button>
      <ul>
         {show === true && searchResults.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default Search;