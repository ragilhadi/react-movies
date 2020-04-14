import React from 'react'
import { Col, Row } from 'antd'
import ItemCard from '../itemCard/ItemCard'

const GridCard = props => {
    return (
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            {props.data.map(datas => (
                <Col lg={6} md={8} xs={24}>
                    <ItemCard 
                        poster={datas.poster_path}
                        tittle={datas.original_title}
                        score={datas.vote_average}
                    />         
            </Col>
            ))}
        </Row>
    )
}


export default GridCard
