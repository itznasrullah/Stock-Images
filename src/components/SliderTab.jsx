import './SliderTab.css';
import { Link } from 'react-router-dom';
import { useState ,useRef } from "react";

const SliderTab = () => {
    const ref = useRef(null);
    const [leftScroll, setLeftScroll] = useState(false);
    const [rightScroll, setRightScroll] = useState(true);

    const scrollBtnToggle = () => {
        (ref.current.scrollLeft  > 0) ? setLeftScroll(true) : setLeftScroll(false);

        (ref.current.scrollWidth - 5 <= ref.current.clientWidth + ref.current.scrollLeft ) ? setRightScroll(false) : setRightScroll(true);
    }

    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
        scrollBtnToggle();      
    };

    return (
        <div className='SliderTab'>
            <div className={`arrow left-arrow ${leftScroll ? 'active': ""}`} onClick={() => scroll(-200)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                    <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" />
                </svg>
            </div>
            <ul ref={ref} onScroll={() => scrollBtnToggle()}>
                <li> <Link to='/Stock-Images/search?query=nature'>nature</Link> </li>
                <li> <Link to='/Stock-Images/search?query=wallpaper'>wallpaper</Link> </li>
                <li> <Link to='/Stock-Images/search?query=background'>background</Link> </li>
                <li> <Link to='/Stock-Images/search?query=sky'>sky</Link> </li>
                <li> <Link to='/Stock-Images/search?query=cat'>cat</Link> </li>
                <li> <Link to='/Stock-Images/search?query=food'>food</Link> </li>
                <li> <Link to='/Stock-Images/search?query=christmas'>christmas</Link> </li>
                <li> <Link to='/Stock-Images/search?query=forest'>forest</Link> </li>
                <li> <Link to='/Stock-Images/search?query=flowers'>flowers</Link> </li>
                <li> <Link to='/Stock-Images/search?query=love'>love</Link> </li>
                <li> <Link to='/Stock-Images/search?query=space'>space</Link> </li>
                <li> <Link to='/Stock-Images/search?query=spring'>spring</Link> </li>
                <li> <Link to='/Stock-Images/search?query=summer'>summer</Link> </li>
                <li> <Link to='/Stock-Images/search?query=beauty'>beauty</Link> </li>
                <li> <Link to='/Stock-Images/search?query=travel'>travel</Link> </li>
                <li> <Link to='/Stock-Images/search?query=river'>river</Link> </li>
                <li> <Link to='/Stock-Images/search?query=water'>water</Link> </li>
                <li> <Link to='/Stock-Images/search?query=blur'>blur</Link> </li>
                <li> <Link to='/Stock-Images/search?query=nature photography'>nature photography</Link> </li>
                <li> <Link to='/Stock-Images/search?query=outdoors'>outdoors</Link> </li>
                <li> <Link to='/Stock-Images/search?query=tree'>tree</Link> </li>
                <li> <Link to='/Stock-Images/search?query=road'>road</Link> </li>
            </ul>
            <div className={`arrow right-arrow ${rightScroll ? 'active': ""}`} onClick={() => scroll(200)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                    <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" />
                </svg>
            </div>
        </div>
    )
}

export default SliderTab