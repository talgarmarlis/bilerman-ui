import React from 'react'
import { articleService } from 'services'
import ArticleView1 from 'components/blrmn/ArticleView1'
import ArticleView2 from 'components/blrmn/ArticleView2'

class Banner extends React.Component {
  state = {}

  componentDidMount() {
    this.load()
  }

  load = () => {
    articleService.getArticles().then(result => {
      this.setState({ articles: result.data.content })
    })
  }

  render() {
    const { articles } = this.state
    return (
      <div>
        <div className="row">
          <div className="col-lg-8 col-md-12">
            {articles && articles.length > 0 && <ArticleView1 article={articles[0]} />}
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="row">
              <div className="col-md-6 col-lg-12">
                {articles && articles.length > 1 && <ArticleView2 article={articles[1]} />}
              </div>
              <div className="col-md-6 col-lg-12">
                {articles && articles.length > 2 && <ArticleView2 article={articles[2]} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Banner
