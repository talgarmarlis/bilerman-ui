import React from 'react'
import { connect } from 'react-redux'
import {message, Tooltip} from 'antd'
import {HeartOutlined, HeartFilled} from '@ant-design/icons';
import style from './style.module.scss'

@connect(({ clap }) => ({ clap }))
class Clap extends React.Component {

  state  = {
    // eslint-disable-next-line react/destructuring-assignment
    count: this.props.article.claps
  }

  clap = (id) => {
    const { dispatch } = this.props
    if(id) {
      dispatch({
        type: 'clap/CLAP_ARTICLE',
        payload: { articleId: id},
        callback: this.updateClapCount
      })
    }
  }

  updateClapCount = () => {
    this.setState((prevState) => ({count: prevState.count + 1}));
    message.success({
      content: '+ 1',
      icon: <i className="fe fe-thumbs-up mr-1" />,
      duration: 0.1
    });
  }

  render() {
    const { article, clap, type} = this.props
    const { count } = this.state
    const { clappedArticleIds } = clap;

    if( article && article.id)
      return (
        <Tooltip title="Clap" placement="top">
          <div className={`${style.container} ${style[type]}`}>
            <span className="font-italic mr-2">{count}</span>
            <a
              role="button"
              tabIndex="0"
              onFocus={e => {e.preventDefault()}}
              onKeyPress={() => this.clap(article.id)}
              onClick={() => this.clap(article.id)}
            >
              { clappedArticleIds.includes(article.id) && <HeartFilled className={style.icon} />}
              { !clappedArticleIds.includes(article.id) && <HeartOutlined className={style.icon} />}
            </a>
          </div>
        </Tooltip>
      )
    return (<></>)
  }
}

export default Clap
