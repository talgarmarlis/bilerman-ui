import React from 'react'
import { FormattedMessage } from 'react-intl'
import List15 from "components/kit/widgets/Lists/15";

const RelatedArticles = () => {
  return (
    <div className="card border-0 shadow-none">
      <div className="card-body">
        <div className="pb-4 mb-3 border-bottom">
          <div className="font-weight-bold mb-3">
            <FormattedMessage id="article.details.relatedArticles.relatedPosts" />
          </div>
          <List15 />
        </div>
      </div>
    </div>
  )
}

export default RelatedArticles
