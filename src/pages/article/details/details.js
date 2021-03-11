import React from 'react'
import {Link} from "react-router-dom";
import moment from "moment";
import Renderer from "components/blrmn/Renderer";
import Bookmark from "components/blrmn/Bookmark";
import Avatar from "components/blrmn/Avatar";
import ViewCount from "components/blrmn/ViewCount";
import CommentCount from "components/blrmn/CommentCount";
import Clap from "components/blrmn/Clap";
import config from "config";

const Details = ({article, article: {id, title, subtitle, imageId, tags, body, createdAt, user, views, comments}}) => {
  return (
    <div className="card border-0 shadow-none">
      <div className="card-body border-bottom border-red">
        <div className="mt-2 d-flex border-bottom-0 mb-2">
          <div className="text-primary font-size-36 font-weight-bold mr-auto">{title}</div>
          <div className="mt-3"><Bookmark articleId={id} type="default" /></div>
        </div>
        <div className="mb-3 font-italic text-muted">{subtitle}</div>
        <div className="d-lg-none d-flex justify-content-center mb-3">
          <div className="mr-2"><Avatar author={user} type="default" size={50} /></div>
          <div className="flex-fill">
            <Link to={`/author/profile/${user.id}`}>
              <div className="font-weight-bold text-default">{`${user.name} ${user.surname}`}</div>
              <div className="text-muted">{moment(new Date(createdAt)).fromNow()}</div>
            </Link>
          </div>
        </div>
        {imageId &&
        <div className="d-flex">
          <img style={{borderRadius:4}} className="img-fluid mb-4 ml-auto mr-auto width-100p" src={`${config.apiUrl}/images/${imageId}`} alt={title} />
        </div>
        }
        <div className="mb-5">
          <Renderer body={JSON.parse(body)} />
        </div>
        {tags && tags.length > 0 &&
        <div className="mb-3">
          {tags.map(tag => (
            <a href="#" onClick={e => e.preventDefault()} className="badge text-blue text-capitalize bg-light font-size-16 mr-3">
              #{tag.name}
            </a>
          ))}
        </div>
        }
        <div className="d-flex border-bottom-0 align-items-center">
          <div className="d-flex mr-auto">
            <span className="mr-4"><ViewCount count={views} type="default" /></span>
            <span className="mr-4"><CommentCount count={comments} type="default" /></span>
            <span><Clap article={article} type="default" /></span>
          </div>
          <div className="mt-3"><Bookmark articleId={id} type="default" /></div>
        </div>
      </div>
    </div>
  )
}

export default Details
