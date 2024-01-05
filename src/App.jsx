import './App.css';
import HomePage from "./components/HomePage";
import ViewImage from "./components/ViewImage";
import SearchResults from "./components/SearchResults";
// import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route path="/view" element={<><ViewImage/></>} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </Router>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
