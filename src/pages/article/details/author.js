import React from 'react'
import {Link} from "react-router-dom";
import moment from "moment";
import Avatar from "components/blrmn/Avatar";
import ViewCount from "components/blrmn/ViewCount";
import CommentCount from "components/blrmn/CommentCount";
import Clap from "components/blrmn/Clap";
import style from "./style.module.scss";

const Author = ({article}) => {
  return (
    <div className="card border-0 shadow-none">
      <div className="card-body">
        <div className="d-flex flex-column mb-4">
          <div className={`${style.item} ml-auto`}>
            <div className="flex-fill mr-2">
              <Link to={`/author/profile/${article.user.id}`} className="d-flex flex-column">
                <div className="font-weight-bold text-default ml-auto">{`${article.user.name} ${article.user.surname}`}</div>
                <div className="text-muted ml-auto">{moment(new Date(article.createdAt)).fromNow()}</div>
              </Link>
            </div>
            <Avatar author={article.user} size={64} />
          </div>
        </div>
        <div className="d-flex flex-column justify-content-start">
          <div className="ml-auto mb-3"><ViewCount count={article.views} type="default" /></div>
          <div className="ml-auto mb-4"><CommentCount count={article.comments} type="default" /></div>
          <div className="ml-auto mb-4"><Clap article={article} type="default" /></div>
        </div>
      </div>
    </div>
  )
}

export default Author
