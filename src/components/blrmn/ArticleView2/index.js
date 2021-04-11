import React from 'react'
import {Link} from "react-router-dom";
import Avatar from "components/blrmn/Avatar";
import Clap from "components/blrmn/Clap";
import Bookmark from "components/blrmn/Bookmark";
import ViewCount from "components/blrmn/ViewCount";
import CommentCount from "components/blrmn/CommentCount";
import config from "config";
import style from "./style.module.scss";

const ArticleView2 = ({article}) => {
  return (
    <div className="card border-0">
      <div
        className={`${style.head}`}
        style={{
          backgroundImage: article.imageId != null ? `url(${config.apiUrl}/images/${article.imageId})` : 'url(/resources/images/template/1.jpeg)',
        }}
      >
        <div className={`${style.overlay} d-flex flex-nowrap`}>
          <div className="card-body d-flex flex-column">
            <div className="d-flex">
              <div className="mr-auto">
                <Link to={`/article/details/${article.id}`}>
                  <h5 className="text-white font-weight-bold mr-3">{article.title}</h5>
                </Link>
              </div>
              <div><Bookmark articleId={article.id} type="white" /></div>
            </div>
            <div className="mt-auto mb-auto">
              <Link to={`/article/details/${article.id}`}>
                <div className="text-white font-size-14" dangerouslySetInnerHTML={{__html: article.subtitle.substr(0,100).concat('. .')}} />
              </Link>
            </div>
            <div className="d-flex">
              <div className="mr-auto mt-auto">
                <div className={style.item}>
                  <div className="mr-2"><Avatar author={article.user} size={27} type="primary" /></div>
                  <Link to={`/author/profile/${article.user.id}`}>
                    <div className="text-primary mr-2">{`${article.user.name} ${article.user.surname}`}</div>
                  </Link>
                </div>
              </div>
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
  )
}

export default ArticleView2
