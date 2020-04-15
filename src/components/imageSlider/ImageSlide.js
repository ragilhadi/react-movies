import React from "react";
import { Carousel } from "antd";
import 'antd/dist/antd.css';
import './ImageSlide.scss'
import { POSTER_SIZE, IMAGE_BASE_URL } from "../../Api/moviedb";

const ImageSlide = (props) => {
  return (
    <div className='container'> 
    <Carousel 
      autoplay
    >
        {props.data.map(datas => (
          <img 
            className='img_darker'
            key = {datas.id}
            src = {`${IMAGE_BASE_URL}${POSTER_SIZE}${datas.backdrop_path}`}
            alt = 'IMAGES'
          />
        ))}
         <h1>{props.data.title}</h1>
    </Carousel>
    </div>  
  )
};

export default ImageSlide;
