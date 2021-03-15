import React from 'react'
import { Link } from 'react-router-dom'
import Clap from 'components/blrmn/Clap'
import Bookmark from 'components/blrmn/Bookmark'
import ViewCount from 'components/blrmn/ViewCount'
import CommentCount from 'components/blrmn/CommentCount'
import moment from 'moment'
import config from 'config'
import style from './style.module.scss'

const ArticleView4 = ({ article }) => {
  return (
    <>
      <div className="card bg-light border-0 shadow-none">
        <div className="card-body">
          <div className="d-flex flex-nowrap align-items-start">
            <div className="flex-grow-1 mr-3 height-250 flex-column d-flex">
              <div className="d-flex flex-wrap mb-1">
                <div className="mr-auto">
                  <div className={style.item}>
                    <div className="text-muted">
                      {moment(new Date(article.createdAt)).fromNow()}
                    </div>
                  </div>
                </div>
                <div className="nav-item dropdown">
                  <Bookmark articleId={article.id} type="primary" />
                </div>
              </div>
              <div className="mb-auto">
                <Link to={`/article/details/${article.id}`}>
                  <div className="font-weight-bold font-size-21 text-primary mb-2">
                    {article.title}
                  </div>
                </Link>
                <Link to={`/article/details/${article.id}`}>
                  <div
                    className="mb-3"
                    dangerouslySetInnerHTML={{ __html: article.subtitle.substr(0, 150) }}
                  />
                </Link>
              </div>
              <div className="d-flex flex-wrap align-items-start">
                <span className="mr-4">
                  <ViewCount count={article.views} type="primary" />
                </span>
                <span className="mr-4">
                  <CommentCount count={article.comments} type="primary" />
                </span>
                <span className="mr-4">
                  <Clap article={article} type="primary" />
                </span>
              </div>
            </div>
            {article.imageId && (
              <div>
                <div className={style.itemContent}>
                  <img src={`${config.apiUrl}/images/${article.imageId}`} alt={article.title} />
                </div>
              </div>
            )
            // <div className="kit__utils__avatar kit__utils__avatar--size110 flex-shrink-0 align-self-start">
            //   <img src={`${config.apiUrl}/images/${article.imageId}`} alt={article.title} />
            // </div>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default ArticleView4
