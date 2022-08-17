import React from 'react'
import { Link } from 'react-router-dom';
import "../pages/page.css"


const Home = () => {
    
return (
    <div  className='home'>
      <Link className='lnk' to="/all">all</Link>
      <Link className='lnk' to="/css">css</Link>
      <Link className='lnk' to="/html">html</Link>
      <Link className='lnk' to="/js">js</Link>
    </div>
);
}

export default Home