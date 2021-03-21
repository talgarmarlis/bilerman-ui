import React, { Component } from 'react'
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
        }
      </div>
    )
  }
}

export default ArticleDetails
