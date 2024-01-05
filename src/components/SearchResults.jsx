import './SearchResults.css';
import Navbar from "./Navbar";
import ImageGallery from "./ImageGallery";
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const search = useLocation().search;
  const query = new URLSearchParams(search).get('query');
  
  return (
    <div className='SearchResults'>
        <Navbar className='stickyNav' defaultQuery={query} />
        <ImageGallery query={query} />
    </div>
  )
}

export default SearchResults