import React from "react";
import { RouteComponentProps } from "@reach/router";
import { Page } from "../../common/components/Page";
import Title from "antd/lib/typography/Title";
export const HomePage: React.FC<RouteComponentProps> = () => {
  return (
    <Page>
      <Title level={1}>{"Welcome"}</Title>
    </Page>
  );
};
