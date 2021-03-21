import React, {useEffect, useState} from 'react'
import {connect} from "react-redux";
import {Form, Button, Input} from 'antd'
import {commentService} from 'services';
import Reply from "./reply";

const { TextArea } = Input


const mapStateToProps = ({ user }) => ({user})
const Replies = ({user, comment}) => {

  const [replies, setReplies] = useState([])
  const [loading, setLoading] = useState(false)
  const [loadingReplies, setLoadingReplies] = useState(false)
  const [page, setPage] = useState();

  const [form] = Form.useForm();

  useEffect(() => {
    loadReplies();
  }, [])

  const loadReplies = (pageNumber, size) =>{
    setLoadingReplies(true)
    commentService.getRepliesByComment(comment.id, pageNumber, size).then(result => {
      const {data} = result
      setReplies([...replies, ...data.content])
      setPage(data)
      setLoadingReplies(false)
    })
  }

  const onFinish = values => {
    if (comment.id) {
      setLoading(true)
      values.commentId = comment.id
      values.user = user;
      commentService.saveReply(values).then(result => {
        const {data} = result
        setReplies([...replies, data])
        setLoading(false)
        form.resetFields();
      });
    }
  }

  const updateReply = (reply) => {
    return commentService.saveReply(reply).then(result => {
      const {data} = result
      const index = replies.findIndex(function f(c) {return c.id === data.id;});
      replies[index] = {...replies[index], message: data.message, updatedAt: data.updatedAt}
      setReplies(replies );
    });
  }

  const deleteReply = (id) => {
    return commentService.deleteReply(id).then(() => {
      setReplies([...replies.filter(x => x.id !== id)])
    });
  }

  return (
    <div>
      <div>
        <Form onFinish={onFinish} form={form}>
          <Form.Item
            name="message"
            className="mb-2"
            rules={[{ required: true, message: "pls fill out the form" }]}
          >
            <TextArea rows={2} placeholder="Your message" />
          </Form.Item>
          <Form.Item>
            <Button className="float-right btn btn-primary" loading={loading} htmlType="submit" style={{ width: 100 }}>
              <i className="fe fe-message-circle mr-2" />
              Reply
            </Button>
          </Form.Item>
        </Form>
      </div>
      {replies.map(reply => (<Reply key={`reply_${reply.id}`} reply={reply} updateReply={updateReply} deleteReply={deleteReply} />))}
      <div>
        {page && page.totalPages > 1 && page.number + 1 < page.totalPages &&
        <Button className="btn btn-default btn-block mt-3" onClick={() => loadReplies(page.number + 1)} loading={loadingReplies}>
          Load More
        </Button>
        }
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(Replies)
