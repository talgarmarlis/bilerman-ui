import React, { Component } from 'react'
import { articleService } from 'services'
import Details from "./details";
import Author from "./author";
import Profile from "./profile";

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
              <div className="d-block"><Details article={article} /></div>
              <Profile author={article.user} />
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
