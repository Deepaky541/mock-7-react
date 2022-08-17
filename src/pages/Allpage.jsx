import React from 'react'
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "./page.css"

const Allpage = () => {
    const [data, setData] = useState([]);
    const [page, setpage] = useState(0);
    useEffect(() => {
        axios({
          url: "https://api.github.com/search/repositories?q=stars:%3E1+language:all?sort=stargazers_count&order=desc",
          method: "GET",
        })
          .then((res) => {
            setData(...data,res.data.items);
          })
          .catch((err) => {
            console.log(err);
          });
    }, [])
    
      
  return (
    <div>
      <div className="main">
        {data.map((el, index) => {
          if (index >= page && index < page + 10) {
            return (
              <div className='hght'>
              <a href={el.owner.html_url} >
                <div className="card">
                  <img src={el.owner.avatar_url} />
                  <p>{el.name}</p>
                  <p>{el.language}</p>
                  <div className="second">
                    <p>{el.stargazers_count}</p>
                    <p>{el.forks_count}</p>
                  </div>
                </div>
              </a>
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
        disabled={(data.length)<=page}
      >
        next
      </button>
    </div>
  );
}

export default Allpage