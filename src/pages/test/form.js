import React from 'react'
import {Button, Form, Input} from "antd";

const QuestionForm = ({addToList}) => {

  const onFinish = (values) => {
    addToList(values)
  }

  return (
    <div>
      <Form
        layout="vertical"
        hideRequiredMark
        onFinish={onFinish}
        className="mb-4"
      >
        <Form.Item
          name="title"
          rules={[{ required: true, message: "please input" }]}
        >
          <Input placeholder="Your title" />
        </Form.Item>
        <Form.Item
          name="message"
          rules={[{ required: true, message: "please input" }]}
        >
          <Input placeholder="Your message" />
        </Form.Item>
        <Form.Item
          name="user"
        >
          <Input placeholder="Your name" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit"> Save </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default QuestionForm
