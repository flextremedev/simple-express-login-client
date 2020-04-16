import React from "react";
import { Layout, Button } from "antd";
import { useAuth } from "../../user-management/auth/hooks/useAuth";
import { Link } from "@reach/router";
import "./Page.scss";

const { Header, Content } = Layout;

export const Page: React.FC = ({ children }) => {
  const { logout } = useAuth();
  const handleLogout = () => {
    if (logout) {
      logout();
    }
  };
  return (
    <Layout className="layout">
      <Header>
        <Button type="link" ghost onClick={handleLogout}>
          Logout
        </Button>
      </Header>
      <Content style={{ padding: "50px" }}>
        {/* <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb> */}
        <div className="site-layout-content">{children}</div>
      </Content>
    </Layout>
  );
};
