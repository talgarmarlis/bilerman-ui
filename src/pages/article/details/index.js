import React, { Component } from 'react'
import {Helmet} from "react-helmet";
import { articleService } from 'services'
import Details from "./details";
import Author from "./author";
import Profile from "./profile";
import Comments from "./comments/comments";

class ArticleDetails extends Component {

  state = {
    article: null
  }

  componentDidMount() {
    const {
      match: { params },
    } = this.props
    articleService.getArticleById(params.id)
      .then(result => {
        this.setState({ article: result.data })
      })
  }

  render() {
    const { article } = this.state
    return (
      <div>
        {article &&
          <div>
            <Helmet>
              <title>{article.title}</title>
              <meta property="og:url" content={`https://bilerman.kg/article/details/${article.id}`} />
              <meta property="og:type" content="article" />
              <meta property="og:title" content={article.title} />
              <meta property="og:description" content={article.subtitle} />
              {article.imageId && <meta property="og:image" content={`https://bilerman.kg/api/images/article/${article.imageId}`} />}
            </Helmet>
            <div className="row">
              <div className="col-lg-9 col-md-12">
                <Details article={article} />
                <Profile author={article.user} />
                <Comments article={article} />
              </div>
              <div className="col-lg-3 col-md-12">
                <div className="d-none d-lg-block">
                  <Author article={article} />
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default ArticleDetails
