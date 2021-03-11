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

const ArticleView1 = ({article}) => {
  return (
    <div className="card border-0">
      <div
        className={`${style.head} height-500 d-flex flex-column`}
        style={{
          backgroundImage: article.imageId != null ? `url(${config.apiUrl}/images/${article.imageId})` : 'url(resources/images/template/1.jpeg)',
        }}
      >
        <div className={`${style.overlay} d-flex`}>
          <div className="card-body d-flex flex-column">
            <div className="d-flex align-items-center">
              <div className="mr-auto">
                <Link to={`/article/details/${article.id}`}>
                  <div className="text-white font-weight-bold font-size-36 mr-auto">{article.title}</div>
                </Link>
              </div>
              <div><Bookmark articleId={article.id} type="white" /></div>
            </div>
            <Link to={`/article/details/${article.id}`}>
              <div className="mt-3 text-white font-size-18" dangerouslySetInnerHTML={{__html: article.subtitle}} />
            </Link>
            <div className="mt-auto mb-3 d-flex align-items-center">
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
              <div className="d-flex">
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

export default ArticleView1
