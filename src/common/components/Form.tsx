import React from "react";
import Title from "antd/lib/typography/Title";
import "./Form.scss";
type FormProps = {
  title: string;
};
export const Form: React.FC<FormProps> = ({ title, children }) => {
  return (
    <div className="form-container">
      <div className="form-left form-side" />
      <div className="form-side">
        <Title level={1}>{title}</Title>
        {children}
      </div>
    </div>
  );
};
