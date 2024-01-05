import './Navbar.css'
import { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";

const Navbar = ({ className, defaultQuery }) => {
  const ref = useRef(null);
  const [stickyNav, setStickyNav] = useState(className);
  const [SearchQuery, setSearchQuery] = useState(defaultQuery);
  const [SearchType, setSearchType] = useState("images");

  const stickNavbar = () => {
    if (ref.current && window !== undefined) {
      window.scrollY >= ref.current.clientHeight ? setStickyNav("stickyNav") : setStickyNav('');
    }
  };

  useEffect(() => {

    if (className !== "stickyNav") {
      window.addEventListener('scroll', stickNavbar);
    }

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    }
  }, [])

  return (
    <div className={`Navbar ${stickyNav}`} ref={ref}>
      <Link to='/'>
        <svg className='logo' xmlns="http://www.w3.org/2000/svg" fill="#000000" version="1.1" id="Capa_1" width="32px" height="32px" viewBox="0 0 984 984" xml="preserve">
          <g>
            <path d="M972,60c0-33.1-26.9-60-60-60H72C38.9,0,12,26.9,12,60v519c0,33.1,26.9,60,60,60h840c33.1,0,60-26.9,60-60V60z" />
            <path d="M921,716H205c-28.2,0-51,22.8-51,51s22.8,51,51,51h716c28.2,0,51-22.8,51-51S949.2,716,921,716z" />
            <path d="M921,882H330.8c-28.2,0-51,22.8-51,51s22.8,51,51,51H921c28.2,0,51-22.8,51-51S949.2,882,921,882z" />
          </g>
        </svg>
      </Link>
      <form className="search-form" action={SearchQuery ? `/search?query=${SearchQuery}` : "#"} method='get' >
        <select name="search-type" id="search-type" onChange={(e) => {
          setSearchType(e.target.value);
        }}>
          <option value="images">Images</option>
          <option value="videos">Videos</option>
        </select>
        <input type="text" value={SearchQuery} placeholder='Search' onChange={(e) => setSearchQuery(e.target.value)} />
        <Link to={SearchQuery ? `/search?query=${SearchQuery}` : "#"}>
          <svg className='search-btn' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
            <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
          </svg>
          <button className='submit-btn' type="submit"></button>
        </Link>
      </form>
      <div>
        <button className='explore-btn'>Explore</button>
        <button className='login-btn'>Log in</button>
      </div>
    </div>
  )
}

export default Navbar