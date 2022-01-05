import React, { useState, useEffect } from "react";
import axios from "axios";
import "./giphy.css"
import Search from "./search";
import Loading from "./loading";
const Giphy = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);
 
  useEffect(() => {
    axios
      .get("https://api.giphy.com/v1/gifs/search", {
        params: {
          api_key: "biC5WfOcRVwgK3LR6d1Fhk55GTrARJeR",
          q: search,
          limit: 20,
        },
      })
      .then((res) => {
        let a = res.data.data;
        setData(a);
        setToggle(false);
      });
      
}, [search]);

  return (
    <div>
      
      <div className="center">
      <Search childSearch = {search} setSearch={setSearch}/>
      </div>
      
      <div className="gif"> 
      <Loading className="center"/>
        {data &&
        data.map((el) => {
          return <img src={el.images.original.url} />;
        })}
       </div>
    </div>
  );
};
 
export default Giphy;

