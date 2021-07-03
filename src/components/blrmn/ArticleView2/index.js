import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Avatar from 'components/blrmn/Avatar'
import Clap from 'components/blrmn/Clap'
import Bookmark from 'components/blrmn/Bookmark'
import ViewCount from 'components/blrmn/ViewCount'
import CommentCount from 'components/blrmn/CommentCount'
import config from 'config'
import style from './style.module.scss'

const ArticleView2 = ({ article }) => {
  const [newText, setNewText] = useState({
    title: article.title,
    subtitle: article.subtitle,
  })
  useEffect(() => {
    const len = article.title.split(' ').length
    console.log(len)
    if (len > 5 && len <= 8) {
      setNewText({ title: article.title, subtitle: article.subtitle.substr(0, 40).concat('. .') })
    } else if (len > 8 && len < 12) {
      setNewText({ title: article.title, subtitle: '' })
    } else if (len >= 12) {
      setNewText({
        title: article.title.substr(0, 75).concat('. .'),
        subtitle: '',
      })
    }
  }, [])

  return (
    <div className="card border-0">
      <div
        className={`${style.head}`}
        style={{
          backgroundImage:
            article.imageId != null
              ? `url(${config.apiUrl}/images/article/${article.imageId})`
              : 'url(/resources/images/template/1.jpeg)',
        }}
      >
        <div className={`${style.overlay} d-flex flex-nowrap`}>
          <div className="card-body d-flex flex-column">
            <div className="d-flex">
              <div className="mr-auto">
                <Link to={`/article/details/${article.id}`}>
                  <h4 className="text-white font-weight-bold mr-3 article-title-text">
                    {newText.title}
                  </h4>
                </Link>
              </div>
              <div>
                <Bookmark articleId={article.id} type="white" />
              </div>
            </div>
            <div className="mt-2 mb-auto">
              <Link to={`/article/details/${article.id}`}>
                {newText.subtitle.length > 1 && (
                  <div
                    className="text-white font-size-14"
                    dangerouslySetInnerHTML={{
                      __html: newText.subtitle,
                    }}
                  />
                )}
              </Link>
            </div>
            <div className="d-flex">
              <div className="mr-auto mt-auto">
                <div className={style.item}>
                  <div className="mr-2">
                    <Avatar author={article.user} size={27} type="primary" />
                  </div>
                  <Link to={`/author/profile/${article.user.id}`}>
                    <div className="text-primary mr-2">{`${article.user.name} ${article.user.surname}`}</div>
                  </Link>
                </div>
              </div>
              <div className="ml-auto d-flex">
                <span className="mr-3">
                  <ViewCount count={article.views} />
                </span>
                <span className="mr-3">
                  <CommentCount count={article.comments} />
                </span>
                <span>
                  <Clap article={article} type="white" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleView2
