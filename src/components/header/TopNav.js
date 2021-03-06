import React from "react";
import "antd/dist/antd.css";
import "./TopNav.scss";
import { Layout, Menu, AutoComplete, Input } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Header } = Layout;

const TopNav = () => {
  return (
    <Layout>
      <Header
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
          padding: "0 150px",
        }}
      >
        {/* <div className="logo">
        </div> */}
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to="/">
              <HomeOutlined />
              Home
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <AutoComplete
              // options={options}
              style={{
                width: 200,
                justifyContent: 'flex-end'
              }}
              // onSelect={onSelect}
              // onSearch={onSearch}
              placeholder="Search..."
            />
          </Menu.Item>
          <Menu.Item key="3">
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
};

export default TopNav;
