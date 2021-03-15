import React from 'react'
import { Button } from 'antd'
import { articleService } from 'services'
import ArticleView4 from 'components/blrmn/ArticleView4'

class Articles extends React.Component {
  state = {
    articles: [],
    loading: false,
  }

  componentDidMount() {
    this.load()
  }

  load = (pageNumber, size) => {
    this.setState({ loading: true })
    const { author } = this.props
    articleService.getArticlesByUser(author.id, pageNumber, size).then(result => {
      const page = result.data
      this.setState(prevState => ({
        articles: [...prevState.articles, ...page.content],
        page,
        loading: false,
      }))
    })
  }

  render() {
    const { articles, page, loading } = this.state
    return (
      <div>
        {articles && articles.length > 0 && (
          <div className="font-size-24 font-weight-bold text-default mb-2">Latest publications</div>
        )}
        {articles &&
          articles.map(article => <ArticleView4 article={article} key={`article_${article.id}`} />)}
        {page && page.totalPages > 1 && page.number + 1 < page.totalPages && (
          <div className="mb-5 pb-2">
            <Button
              className="btn btn-outline-primary mb-1"
              onClick={() => this.load(page.number + 1)}
              loading={loading}
            >
              Load More
            </Button>
          </div>
        )}
      </div>
    )
  }
}

export default Articles
