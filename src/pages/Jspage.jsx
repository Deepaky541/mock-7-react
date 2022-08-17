import React from 'react'
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "./page.css";


const Jspage = () => {
 const [jsdata, setjsdata] = useState([]);
 const [page, setpage] = useState(0);
  useEffect(() => {
    axios({
      url: "https://api.github.com/search/repositories?q=stars:%3E1+language:javascript",
      method: "GET",
    })
      .then((res) => {
        setjsdata(...jsdata, res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
 return (
   <div>
     <div className="main">
       {jsdata.map((el, index) => {
        if (index >= page && index < page + 10) {
          return (
            <div className="card">
              <img src={el.owner.avatar_url} />
              <p>{el.name}</p>
              <p>{el.language}</p>
              <div>
                <p>{el.stargazers_count}</p>
                <p>{el.forks_count}</p>
              </div>
            </div>
          );
        }
       })}
     </div>
     <button
       onClick={() => {
         setpage(page - 10);
       }}
       disabled={page <= 0}
     >
       prev
     </button>
     <button
       onClick={() => {
         setpage(page + 10);
       }}
       disabled={jsdata.length <= page}
     >
       next
     </button>
   </div>
 );
}

export default Jspage