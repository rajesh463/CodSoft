import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import SoryIMG from "../components/images/sorry-image.jpg"
import "../components/LoadingToRedirect.css";



const LoadingToRedirect = () => {
    const [count,setCount] = useState(3);
    const history = useHistory();
    useEffect(()=>{
      const interval = setInterval(()=>{
          setCount((currentCount)=>--currentCount)
      },1000);
      count === 0 && history.push("/login");
      return ()=>clearInterval(interval);
    },[count,history]);
    return (
      <div className='srydiv'>
        <img className='sryimg' alt="sryIMG" src={SoryIMG} />
        <p className='LoadingToRedirect-p'>You can't access some page without login</p>
        <p className='LoadingToRedirect-pp'> Redirecting to login page in {count} seconds</p>
      </div>
    )
}

export default LoadingToRedirect