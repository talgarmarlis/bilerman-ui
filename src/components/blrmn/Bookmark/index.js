import React from 'react'
import { connect } from 'react-redux'
import {message, Tooltip} from 'antd'
import style from './style.module.scss'


@connect(({ bookmark }) => ({ bookmark }))
class Bookmark extends React.Component {
  static defaultProps = {
    articleId: null
  }

  save = (id) => {
    const { dispatch } = this.props
    if(id) {
      dispatch({
        type: 'bookmark/BOOKMARK_ARTICLE',
        payload: { articleId: id},
        callback: this.updateBookmark
      })
    }
  }

  updateBookmark = () => {
    const {articleId, bookmark} = this.props
    const { savedArticleIds} = bookmark;
    if(savedArticleIds.includes(articleId)) {
      message.success({
        content: 'Saved',
        icon: <i className="fe fe-bookmark mr-2" />,
        duration: 0.1
      });
    }
    else {
      message.success({
        content: 'Unsaved',
        icon: <i className="fe fe-bookmark mr-2" />,
        duration: 0.1
      });
    }
  }

  render() {
    const { articleId, bookmark, type} = this.props
    const { savedArticleIds} = bookmark;
    return (
      <Tooltip title="Bookmark" placement="top">
        <div className={`${style.container} ${style[type]}`}>
          <a
            role="button"
            tabIndex="0"
            onFocus={e => {e.preventDefault()}}
            onKeyPress={() => this.save(articleId)}
            onClick={() => this.save(articleId)}
          >
            { savedArticleIds.includes(articleId) && <i className="fa fa-bookmark" />}
            { !savedArticleIds.includes(articleId) && <i className="fa fa-bookmark-o" />}
          </a>
        </div>
      </Tooltip>
    )
  }
}

export default Bookmark
