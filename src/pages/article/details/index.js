import React, { Component } from 'react'
import { articleService } from 'services'

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
        <div>
          <div className="row">
            {article && <h1>{article.title}</h1>}
          </div>
        </div>
      </div>
    )
  }
}

export default ArticleDetails
