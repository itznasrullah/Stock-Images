import './HomePage.css';
import Navbar from "./Navbar";
import ImageGallery from "./ImageGallery";
import SliderTab from "./SliderTab";
import { useState } from 'react';
import { Link } from "react-router-dom";

const HomePage = () => {
  const [SearchQuery, setSearchQuery] = useState('');

  return (
    <div className='HomePage'>
      <div className="hero-section">
        <Navbar defaultQuery='' />
        <div className='hero-banner'>
          <h2 className='title'>Unleash Creativity, Capture Moments: Your Vision, Our Stock.</h2>
          <form className="search-form" action={SearchQuery ? `/search?query=${SearchQuery}` : "#"} method='get' >
            <Link to={SearchQuery ? `/Stock-Images/search?query=${SearchQuery}` : "#"}>
              <svg className='search-btn' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
              </svg>
              <button className='submit-btn' type="submit"></button>
            </Link>
            <input type="text" value={SearchQuery} placeholder='Search' onChange={(e) => setSearchQuery(e.target.value)} />
            <select name="search-type" id="search-type">
              <option value="images">Images</option>
              <option value="videos">Videos</option>
            </select>
          </form>

        </div>
      </div>
      <div className='container'>
        <SliderTab />
        <ImageGallery query="nature" />
      </div>
    </div>
  )
}

export default HomePage;