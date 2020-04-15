import React from 'react'
import { PageHeader } from "antd";
import './PageTittle.scss'

const PageTittle = (props) => {
    return (
        <div className='container'>
        <PageHeader
            className="site-page-header"
            title={props.tittle}
            subTitle={props.subtittle}
        />
        </div>
    )
}

export default PageTittle
