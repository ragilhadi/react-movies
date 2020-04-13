import React from 'react'
import { PageHeader } from "antd";
import './PageTittle.scss'

const PageTittle = () => {
    return (
        <div className='container'>
        <PageHeader
            className="site-page-header"
            title="Title"
            subTitle="This is a subtitle"
        />
        </div>
    )
}

export default PageTittle
