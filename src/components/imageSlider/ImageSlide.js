import React from "react";
import { Carousel } from "antd";
import 'antd/dist/antd.css';
import './ImageSlide.scss'
import { POSTER_SIZE, IMAGE_BASE_URL } from "../../Api/moviedb";

const ImageSlide = (props) => {
  return (
    <Carousel autoplay>
        {props.data.map(datas => (
          <img 
            key = {datas.id}
            src = {`${IMAGE_BASE_URL}${POSTER_SIZE}${datas.backdrop_path}`}
            alt = 'IMAGES'
          />
        ))}
    </Carousel>
  );
};

export default ImageSlide;
