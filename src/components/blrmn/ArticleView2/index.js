import React from 'react'
import {Link} from "react-router-dom";
import Avatar from "components/blrmn/Avatar";
import Clap from "components/blrmn/Clap";
import Bookmark from "components/blrmn/Bookmark";
import ViewCount from "components/blrmn/ViewCount";
import CommentCount from "components/blrmn/CommentCount";
import moment from 'moment'
import config from "config";
import style from "./style.module.scss";

const ArticleView2 = ({article}) => {
  return (
    <div className="card border-0">
      <div>
        <div
          className={`${style.head} d-flex flex-column`}
          style={{
            backgroundImage: article.imageId != null ? `url(${config.apiUrl}/images/${article.imageId})` : 'url(resources/images/template/1.jpeg)',
          }}
        >
          <div className={`${style.overlay} d-flex flex-column`}>
            <div className="mt-2 card-header card-header-flex border-bottom-0 align-items-center">
              <div className="d-flex flex-column justify-content-center mr-auto">
                <Link to={`/article/details/${article.id}`}>
                  <h5 className="mb-0 text-white font-weight-bold font-size-18">{article.title}</h5>
                </Link>
              </div>
              <div><Bookmark articleId={article.id} type="white" /></div>
            </div>
            <Link to={`/article/details/${article.id}`}>
              <div className="card-body text-white font-size-10" dangerouslySetInnerHTML={{__html: article.subtitle}} />
            </Link>
            <div className="mt-auto mb-3 card-header card-header-flex align-items-center">
              <div className="d-flex flex-column justify-content-center mr-auto">
                <div className={style.item}>
                  <div className="mr-2"><Avatar author={article.user} type="primary" size={64} /></div>
                  <div className="flex-fill">
                    <Link to={`/author/profile/${article.user.id}`}>
                      <div className="font-weight-bold text-white">{`${article.user.name} ${article.user.surname}`}</div>
                      <div className="text-muted">{moment(new Date(article.createdAt)).fromNow()}</div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-wrap justify-content-start align-items-start">
                <span className="mr-4"><ViewCount count={article.views} /></span>
                <span className="mr-4"><CommentCount count={article.comments} /></span>
                <span><Clap article={article} type="white" /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleView2
