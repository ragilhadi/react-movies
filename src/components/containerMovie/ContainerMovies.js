import React from 'react'
import { PageHeader, Divider } from 'antd'
import GridCard from '../gridCard/GridCard'
import ButtonIcon from '../buttonIcon/ButtonIcon'

const ContainerMovies = props => {
    return (
        <div>
            <PageHeader 
                title={props.tittle}
                subTitle={props.subtittle}
            />
            <GridCard 
                data={props.data}
            />
            <ButtonIcon 
                name={props.button}
            />
        </div>
    )
}


export default ContainerMovies
