import React from "react";
import { Button, Divider } from 'antd';
import { RightOutlined } from '@ant-design/icons';

const ButtonIcon = (props) => {
  return (
    <>
        <Divider orientation="right">
            <Button type="primary" icon={<RightOutlined />} >
            {props.name}
            </Button>
        </Divider>
    </>
  );
};

export default ButtonIcon;
