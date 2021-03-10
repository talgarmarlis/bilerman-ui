import React from 'react'
import {articleService} from "services";
import ArticleView1 from "./components/ArticleView1";
import ArticleView2 from "./components/ArticleView2";

class Banner extends React.Component {

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
        <div className="row">
          <div className="col-xl-8 col-lg-12">
            {articles && <ArticleView1 article={articles[0]} />}
          </div>
          <div className="col-xl-4 col-lg-12">
            {articles && <ArticleView2 article={articles[1]} />}
            {articles && <ArticleView2 article={articles[2]} />}
          </div>
        </div>
      </div>
    )
  }
}

export default Banner
