import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from 'components/blrmn/Avatar'
import Clap from 'components/blrmn/Clap'
import Bookmark from 'components/blrmn/Bookmark'
import ViewCount from 'components/blrmn/ViewCount'
import CommentCount from 'components/blrmn/CommentCount'
import moment from 'moment'
import config from 'config'
import style from './style.module.scss'

const ArticleView3 = ({ article }) => {
  return (
    <>
      <div className="card card-borderless bg-light">
        <div className="card-body">
          <div className="row d-flex flex-row-reverse">
            <div className="col-xs-12 col-sm-4">
              {article.imageId &&
              (
                <di>
                  <div
                    className={`${style.head} d-flex flex-column`}
                    style={{ backgroundImage: `url(${config.apiUrl}/images/${article.imageId})`}}
                  />
                  <div className="mb-3 d-sm-none" />
                </di>
              )
              }
            </div>
            <div className="col-xs-12 col-sm-8 d-flex">
              <div className="d-flex flex-column flex-fill">
                <div className="d-flex mb-2">
                  <div className="mr-auto">
                    <div className={style.item}>
                      <div className="mr-2"><Avatar author={article.user} size={27} /></div>
                      <div className="d-flex flex-wrap">
                        <div className="mr-2">
                          <Link to={`/author/profile/${article.user.id}`}>
                            <div className="font-weight-bold text-default">{`${article.user.name} ${article.user.surname}`}</div>
                          </Link>
                        </div>
                        <div className="text-muted">{` ${moment( new Date(article.createdAt)).fromNow()}`}</div>
                      </div>
                    </div>
                  </div>
                  <div className="ml-2 nav-item dropdown">
                    <Bookmark articleId={article.id} type="primary" />
                  </div>
                </div>
                <div className="mb-2">
                  <Link to={`/article/details/${article.id}`}>
                    <h5 className="text-primary font-weight-bold">
                      {article.title}
                    </h5>
                  </Link>
                </div>
                <div className="mb-2">
                  <Link to={`/article/details/${article.id}`}>
                    <div dangerouslySetInnerHTML={{ __html: article.subtitle.substr(0, 150).concat('. .') }} />
                  </Link>
                </div>
                <div className="mt-auto d-flex">
                  <span className="mr-3">
                    <ViewCount count={article.views} type="primary" />
                  </span>
                  <span className="mr-3">
                    <CommentCount count={article.comments} type="primary" />
                  </span>
                  <span>
                    <Clap article={article} type="primary" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ArticleView3
