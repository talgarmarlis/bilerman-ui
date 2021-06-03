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
        className={`${style.head}`}
        style={{
          backgroundImage: article.imageId != null ? `url(${config.apiUrl}/images/article/${article.imageId})` : 'url(/resources/images/template/1.jpeg)',
        }}
      >
        <div className={`${style.overlay} d-flex flex-nowrap`}>
          <div className="card-body d-flex flex-column pt-5">
            <div className="d-flex">
              <div className="mr-auto">
                <Link to={`/article/details/${article.id}`}>
                  <h2 className="text-white font-weight-bold mr-3">{article.title}</h2>
                </Link>
              </div>
              <div><Bookmark className="mt-2" articleId={article.id} type="white" /></div>
            </div>
            <div className="mt-3 mb-auto">
              <Link to={`/article/details/${article.id}`}>
                <div className="d-none d-sm-block text-white font-size-18" dangerouslySetInnerHTML={{__html: article.subtitle}} />
                <div className="d-sm-none text-white" dangerouslySetInnerHTML={{__html: article.subtitle}} />
              </Link>
            </div>
            <div className="mt-auto">
              <div className="row">
                <div className="col-sm-6 col-xs-12 d-flex">
                  <div className="d-flex justify-content-center mr-auto">
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
                </div>
                <div className="col-sm-6 col-xs-12 d-flex align-items-center">
                  <div className="ml-auto d-flex">
                    <span className="mr-3"><ViewCount count={article.views} /></span>
                    <span className="mr-3"><CommentCount count={article.comments} /></span>
                    <span><Clap article={article} type="white" /></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleView1
