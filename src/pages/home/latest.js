import React from 'react'
import {articleService} from "services";
import ArticleView3 from "./components/ArticleView3";

class Latest extends React.Component {

  state = {}

  componentDidMount() {
    this.load()
  }

  load = () => {
    articleService.getArticles().then(result => {
      this.setState({articles: result.data.content})
    })
  }

  render() {
    const { articles } = this.state
    return (
      <div>
        <div className="d-flex flex-wrap align-items-center">
          <div className="my-1 mr-3 font-size-32 flex-shrink-0">
            <i className="fe fe-rss" />
          </div>
          <div>
            <div className="font-size-24 font-weight-bold text-default">Latest publications</div>
          </div>
        </div>
        {articles && articles.map(article => (
          <ArticleView3 article={article} key={`article_${article.id}`} />
        ))}
      </div>
    )
  }
}

export default Latest
