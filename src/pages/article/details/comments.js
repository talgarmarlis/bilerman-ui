import React from 'react'
import {Button, Form, Input, Upload} from "antd";
import {MailOutlined, UploadOutlined, UserOutlined} from "@ant-design/icons";
import General15 from "../../../components/kit/widgets/General/15";

const { TextArea } = Input


const Comments = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="text-dark mb-4">Leave a comment</h5>
        <Form className="login-form">
          <Form.Item name="userName">
            <Input
              prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Your name"
            />
          </Form.Item>
          <Form.Item name="mail">
            <Input
              prefix={<MailOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Your email"
            />
          </Form.Item>
          <Form.Item name="message">
            <TextArea rows={3} placeholder="Your message" />
          </Form.Item>
          <Form.Item>
            <Button className="mr-2" type="primary" style={{ width: 200 }}>
              <i className="fa fa-send mr-2" />
              Send
            </Button>
            <Upload>
              <Button>
                <UploadOutlined />
                Attach File
              </Button>
            </Upload>
          </Form.Item>
        </Form>
        <h6 className="mb-4 text-uppercase">
          <strong>Comments (76)</strong>
        </h6>
        <General15 />
        <a
          href="#"
          onClick={e => e.preventDefault()}
          className="d-block btn btn-light text-primary mt-3"
        >
          Load More
        </a>
      </div>
    </div>
  )
}

export default Comments
