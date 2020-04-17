import React from "react";
import "antd/dist/antd.css";
import "./TopNav.scss";
import { Layout, Menu, AutoComplete, Input } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { ReactComponent as ReactLogo } from "../../images/logo_horizontal.svg";
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
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to="/">
              <HomeOutlined />
              Home
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <AutoComplete
              dropdownMatchSelectWidth={252}
              style={{
                width: 300,
              }}
              // options={options}
              // onSelect={onSelect}
              // onSearch={handleSearch}
            >
              <Input.Search size="large" placeholder="input here" enterButton />
            </AutoComplete>
          </Menu.Item>
          <Menu.Item key="3">
            <ReactLogo />
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
};

export default TopNav;
