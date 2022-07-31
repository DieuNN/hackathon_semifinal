import React from "react";
import * as S from "./style";

import { Button, Form, Input, Radio, DatePicker, Row, Col } from "antd";

import React from "react";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

const Resgister = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <S.Wrapper>
      <Row gutter={16}>
        <Col span={18} style={{marginTop: 60}} >
          <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <Form.Item
              name={["user", "name"]}
              label="First name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "email"]}
              label="Last name"
              rules={[
                {
                  type: "email",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item label="Sex">
              <Radio.Group>
                <Radio value="male"> Male </Radio>
                <Radio value="female"> Female </Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="DatePicker">
              <DatePicker />
            </Form.Item>

            <Form.Item name={["user", "website"]} label="Phone">
              <Input />
            </Form.Item>
            <Form.Item name={["user", "introduction"]} label="Address">
              <Input.TextArea />
            </Form.Item>
            <Row justify="center" gutter={30}>
              <Col>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                  <Button type="primary" htmlType="submit">
                    Save
                  </Button>
                </Form.Item>
              </Col>
              <Col>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                  <Button type="danger">Cancel</Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col span={6} >
          <Button>kdkdksk</Button>
        </Col>
      </Row>
    </S.Wrapper>
  );
};

export default Resgister;
