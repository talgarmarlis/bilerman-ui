import React, {useState} from 'react'
import moment from "moment";
import Avatar from "components/blrmn/Avatar";
import {connect} from "react-redux";
import {Button, Form, Input, Modal, Tooltip} from "antd";
import {DeleteOutlined} from "@ant-design/icons";

const { TextArea } = Input
const { confirm } = Modal

const mapStateToProps = ({ user }) => ({user})
const Reply = ({user, reply, updateReply, deleteReply}) => {

  const [editView, setEditView] = useState(false)
  const [loading, setLoading] = useState(false)

  const remove = () => {
    confirm({
      title: 'Are you sure to delete this reply?',
      icon: <DeleteOutlined />,
      content: (
        <div>
          <div className="utils__title">
            <strong>{reply.message}</strong>
          </div>
        </div>
      ),
      okText: 'Delete',
      okType: 'danger',
      cancelText: 'Cancel',
      onOk: () => deleteReply(reply.id)
    })
  }

  const onFinish = values => {
    if (reply.id) {
      setLoading(true);
      reply.message = values.message
      updateReply(reply).then(() => {
        setLoading(false);
        setEditView(false);
      });
    }
  }

  return (
    <div className="d-flex flex-nowrap align-items-start pt-4">
      <div className="mr-2 flex-shrink-0 align-self-start">
        <Avatar author={reply.user} size={27} />
      </div>
      <div className="flex-grow-1">
        <div className="border-bottom">
          <div className="d-flex flex-wrap mb-2">
            <div className="mr-auto">
              <div className="text-gray-6">
                <span className="text-dark font-weight-bold mr-2">{reply.user.name}</span>
                <span className="text-muted font-size-12 font-italic">{moment(new Date(reply.createdAt)).fromNow()}</span>
              </div>
            </div>
            {user && user.id === reply.user.id &&
            <div>
              <Tooltip placement="top" title="Edit comment">
                <a href="javascript: void(0);" className="btn btn-sm mr-2" onClick={() => setEditView(!editView)}>
                  <i className="fe fe-edit-2" />
                </a>
              </Tooltip>
              <Tooltip placement="top" title="Delete comment">
                <a href="javascript: void(0);" className="btn btn-sm" size="small" onClick={remove}>
                  <i className="fe fe-trash" />
                </a>
              </Tooltip>
            </div>
            }
          </div>
          {!editView && <div className="mb-3">{reply.message}</div>}
          {editView &&
          <div className="mt-3">
            <Form className="login-form" onFinish={onFinish}>
              <Form.Item
                name="message"
                className="mb-2"
                initialValue={reply.message}
                rules={[{ required: true, message: "pls fill out the form" }]}
              >
                <TextArea rows={2} placeholder="Your message" />
              </Form.Item>
              <Form.Item>
                <div className="float-right">
                  <Button className="btn mr-2" onClick={() => setEditView(!editView)}>
                    Cancel
                  </Button>
                  <Button className="btn btn-primary" loading={loading} htmlType="submit">
                    Edit
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </div>
          }
        </div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(Reply)
