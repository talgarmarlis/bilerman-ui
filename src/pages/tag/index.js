import React, { useEffect, useState } from 'react'
import { Button } from "antd";
import { tagService } from 'services'
import { FormattedMessage } from 'react-intl'
import { useParams } from 'react-router-dom'
import ArticleView3 from "../../components/blrmn/ArticleView3";

const Tags = () => {

  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState();
  const [loading, setLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    loadTags();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const loadTags = (pageNumber, size) =>{
    setLoading(true)
    tagService.getArticlesByTagName(params.tagName, pageNumber, size)
      .then(result => {
        const p = result.data
        setPage(p)
        setArticles([...articles,...p.content])
        setLoading(false)
      })
  }

  return (
    <div>
      {articles && articles.length > 3 && (
        <div className="font-size-14">
          <FormattedMessage id="pages.tag.index.tagged_in" />
          <span className="font-size-24 font-weight-bold" style={{textTransform: "capitalize"}}>
            {params.tagName}
          </span>
        </div>
      )}
      {articles && articles.map(article => <ArticleView3 article={article} key={`article_${article.id}`} />)}
      {page && page.totalPages > 1 && page.number + 1 < page.totalPages && (
        <div className="mb-5 pb-2">
          <Button
            className="btn btn-outline-primary mb-1"
            onClick={() => loadTags(page.number + 1)}
            loading={loading}
          >
            <FormattedMessage id="author.profile.articles.loadMore" />
          </Button>
        </div>
      )}
    </div>
    )
 }

export default Tags
