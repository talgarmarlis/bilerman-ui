import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {connect} from "react-redux";
import moment from "moment";
import {Button, Form, Input, Modal, Tooltip} from 'antd'
import {DeleteOutlined} from "@ant-design/icons";
import Avatar from "components/blrmn/Avatar";
import Replies from "./replies";

const { TextArea } = Input
const { confirm } = Modal

const mapStateToProps = ({ user }) => ({user})
const Comment = ({user, comment, updateComment, deleteComment}) => {

  const [repliesView, setRepliesView] = useState(false)
  const [editView, setEditView] = useState(false)
  const [loading, setLoading] = useState(false)

  const remove = () => {
    confirm({
      title: 'Are you sure to delete this comment?',
      icon: <DeleteOutlined />,
      content: (
        <div>
          <div className="utils__title">
            <strong>{comment.message}</strong>
          </div>
        </div>
      ),
      okText: 'Delete',
      okType: 'danger',
      cancelText: 'Cancel',
      onOk: () => deleteComment(comment.id)
    })
  }

  const onFinish = values => {
    if (comment.id) {
      setLoading(true);
      comment.message = values.message
      updateComment(comment).then(() => {
        setLoading(false);
        setEditView(false);
      });
    }
  }

  return (
    <div className="d-flex flex-nowrap align-items-start pt-4">
      <div className="mr-2 flex-shrink-0 align-self-start">
        <Avatar author={comment.user} />
      </div>
      <div className="flex-grow-1">
        <div className="border-bottom">
          <div className="d-flex flex-wrap mb-0">
            <div className="mr-auto">
              <div className="text-gray-6">
                <Link to={`/author/profile/${comment.user.id}`}>
                  <span className="text-dark font-weight-bold">{comment.user.name}</span>
                </Link>
              </div>
            </div>
            {user && user.id === comment.user.id &&
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
          {!editView &&
            <div className="mb-3">
              {comment.message}
            </div>
          }
          {editView &&
            <div className="mt-3">
              <Form className="login-form" onFinish={onFinish}>
                <Form.Item
                  name="message"
                  className="mb-2"
                  initialValue={comment.message}
                  rules={[{ required: true, message: "pls fill out the form" }]}
                >
                  <TextArea rows={2} placeholder="Your message" />
                </Form.Item>
                <Form.Item>
                  <div className="float-right">
                    <Button className="btn mr-2" onClick={() => setEditView(!editView)}>
                      Cancel
                    </Button>
                    <Button className="btn btn-default" loading={loading} htmlType="submit">
                      Edit
                    </Button>
                  </div>
                </Form.Item>
              </Form>
            </div>
          }
          <div className="d-flex flex-wrap justify-content-start align-items-start mb-3">
            <div className="text-muted font-italic mr-3">{moment(new Date(comment.createdAt)).fromNow()} </div>
            <a href="javascript: void(0);" className="text-blue" onClick={() => setRepliesView(!repliesView)}>
              {comment.repliesCount} <i className="fe fe-message-circle mr-1" /> reply
            </a>
          </div>
        </div>
        {repliesView && <Replies comment={comment} />}
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(Comment)
