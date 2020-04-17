import React from "react";
import "antd/dist/antd.css";
import { Card } from "antd";
import { POSTER_SIZE, IMAGE_BASE_URL } from "../../Api/moviedb"
import { Link } from "react-router-dom";

const { Meta } = Card;

const ItemCard = (props) => {
  return (
    <div>
    {props.clickable ? 
      <Link to={{pathname: `/${props.movieId}`, movieName: `${props.movieName}`}}>
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        <img
          alt="example"
          src={`${IMAGE_BASE_URL}${POSTER_SIZE}${props.poster}`}
        />
      }
    >
      <Meta title={props.tittle} description={props.score} />
    </Card>
    </Link>
    :
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        <img
          alt="example"
          src={`${IMAGE_BASE_URL}${POSTER_SIZE}${props.poster}`}
        />
      }
    >
      <Meta title={props.tittle} description={props.score} />
    </Card>
    }
    </div>
  )
};

export default ItemCard;
