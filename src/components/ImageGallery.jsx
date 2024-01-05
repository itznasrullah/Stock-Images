import './ImageGallery.css';
import { useState, useEffect, useRef } from "react";
import ImageElement from "./ImageElement";
import StockApi from "../Api/StockApi";
import Loading from "../assets/Loading.gif";

const ImageGallery = ({ query }) => {
  const ref = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(2);
  const [columns, setColumns] = useState([]);

  useEffect(() => {

    setData([]);
    setIsLoading(true);

    StockApi(query, 1)
      .then((incomingData) => {
        if (incomingData && incomingData.hits)
          setData(incomingData.hits);

        setIsLoading(false);
      })
    setPage(2);

  }, [query])

  useEffect(() => {

    const getData = () => {
      setIsLoading(true);

      StockApi(query, page)
        .then((incomingData) => {
          if (incomingData && incomingData.hits)
            setData(prev => [...prev, ...incomingData.hits]);

          setIsLoading(false);
        })
    }

    return () => {
      getData();
      if (page >= 25) {
        window.removeEventListener('scroll', handleScroll);
        setIsLoading(false);
      }
    }

  }, [page])

  const handleScroll = () => {
    if (ref.current && window !== undefined) {
      if (window.scrollY + window.innerHeight + 200 >= ref.current.clientHeight) {
        setPage(prev => prev + 1);
        setPage(prev => prev + 1);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  useEffect(() => {
    let n;
    if(window.innerWidth <= 550)
      n = 1;
    else if(window.innerWidth <= 950)
      n = 2;
    else
      n = 3;
    
    setIsLoading(true);
    setColumns(splitArray([...data], n));
    setIsLoading(false);

  }, [data])


  function splitArray(array, n) {
    let result = [];
    for (let i = n; i > 0; i--) {
      result.push(array.splice(0, Math.ceil(array.length / i)));
    }
    return result;
  }

  return (
    <div className='ImageGallery' ref={ref}>
      <div className="columns">
        {
          columns && columns.map((column) => {
            return <div className='column'>
              {column && column.map((item) => {
                return <ImageElement id={item.id} src={item.webformatURL} key={item.id * Math.random()} alt="" />;
              })}
            </div>
          })
          // data && data.map((data) => {
          //   return <ImageElement id={data.id} src={data.webformatURL} key={data.id * Math.random()} alt="" />
          // })
        }
      </div>
      {
        isLoading ? <center> <img className="loading" height='200px' width='200px' src={Loading} alt="" />  </center> : ""
      }
    </div>
  )
}

export default ImageGallery