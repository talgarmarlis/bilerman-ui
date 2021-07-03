import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { FormattedMessage, injectIntl } from 'react-intl'
import { Button, Form, Input } from 'antd'
import { commentService } from 'services'
import Comment from './comment'

const { TextArea } = Input

const mapStateToProps = ({ user }) => ({ user })
const Comments = ({ user, article, intl: { formatMessage } }) => {
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(false)
  const [loadingComments, setLoadingComments] = useState(false)
  const [page, setPage] = useState()

  const [form] = Form.useForm()

  useEffect(() => {
    loadComments()
  }, [])

  const loadComments = (pageNumber, size) => {
    setLoadingComments(true)
    commentService.getCommentsByArticle(article.id, pageNumber, size).then(result => {
      const { data } = result
      setComments([...comments, ...data.content])
      setPage(data)
      setLoadingComments(false)
    })
  }

  const onFinish = values => {
    if (article.id) {
      setLoading(true)
      values.articleId = article.id
      values.user = user
      commentService.saveComment(values).then(result => {
        setComments([...comments, result.data])
        setLoading(false)
        form.resetFields()
      })
    }
  }

  const updateComment = comment => {
    return commentService.saveComment(comment).then(result => {
      const { data } = result
      const index = comments.findIndex(function f(c) {
        return c.id === data.id
      })
      comments[index] = { ...comments[index], message: data.message, updatedAt: data.updatedAt }
      setComments(comments)
    })
  }

  const deleteComment = id => {
    return commentService.deleteComment(id).then(() => {
      setComments([...comments.filter(x => x.id !== id)])
    })
  }

  return (
    <div className="card border-0 shadow-none">
      <div className="card-body">
        <h5 className="text-dark mb-4">
          <FormattedMessage id="article.details.comments.leaveComment" />
        </h5>
        <Form className="login-form" onFinish={onFinish} form={form}>
          <Form.Item
            name="message"
            rules={[
              {
                required: true,
                message: formatMessage({ id: 'article.details.comments.commentMessageError' }),
              },
            ]}
          >
            <TextArea
              rows={3}
              placeholder={formatMessage({ id: 'article.details.comments.commentMessage' })}
            />
          </Form.Item>
          <Form.Item>
            <Button
              className="float-right btn btn-default"
              loading={loading}
              htmlType="submit"
              style={{ width: 150 }}
            >
              <i className="fe fe-message-square mr-2" />
              <FormattedMessage id="article.details.comments.comment" />
            </Button>
          </Form.Item>
        </Form>
        <h6 className="mb-4 text-uppercase">
          <strong>
            <FormattedMessage id="article.details.comments.comments" /> ({article.comments})
          </strong>
        </h6>
        {comments.map(comment => (
          <Comment
            key={`comment_${comment.id}`}
            comment={comment}
            deleteComment={deleteComment}
            updateComment={updateComment}
          />
        ))}

        {page && page.totalPages > 1 && page.number + 1 < page.totalPages && (
          <Button
            className="btn btn-default btn-block mt-3"
            onClick={() => loadComments(page.number + 1)}
            loading={loadingComments}
          >
            <FormattedMessage id="article.details.comments.loadMore" />
          </Button>
        )}
      </div>
    </div>
  )
}

export default injectIntl(connect(mapStateToProps)(Comments))
