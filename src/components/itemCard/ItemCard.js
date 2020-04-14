import React from "react";
import "antd/dist/antd.css";
// import './index.css';
import { Card } from "antd";
import { POSTER_SIZE, IMAGE_BASE_URL } from "../../Api/moviedb"

const { Meta } = Card;

const ItemCard = (props) => {
  return (
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
  );
};

export default ItemCard;
