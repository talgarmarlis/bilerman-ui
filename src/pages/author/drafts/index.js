import React, { useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'
import { Tabs } from 'antd'
import DraftList from './list'

const { TabPane } = Tabs

const mapStateToProps = ({ user }) => ({ user })

const Drafts = ({ user }) => {
  const [tabKey, setTabKey] = useState('1')

  const changeTab = key => {
    setTabKey(key)
  }

  return (
    <div>
      <div className="kit__utils__heading">
        <div className="d-flex">
          <div className="d-flex flex-column justify-content-center mr-auto">
            <h5>
              <span className="mr-3">
                <FormattedMessage id="author.drafts.index.yourDrafts" />
              </span>
            </h5>
          </div>
          <div className="d-flex flex-column justify-content-center">
            <a href="/article/edit" className="btn btn-outline-primary mb-1">
              <i className="fe fe-feather mr-2" />
              <FormattedMessage id="author.drafts.index.writeStory" />
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header card-header-flex">
              <Tabs activeKey={tabKey} className="kit-tabs" onChange={changeTab}>
                <TabPane
                  tab={
                    <span>
                      <i className="fe fe-layers mr-1" />
                      <FormattedMessage id="author.drafts.index.drafts" />
                    </span>
                  }
                  key="1"
                />
                <TabPane
                  tab={
                    <span>
                      <i className="fe fe-grid mr-1" />
                      <FormattedMessage id="author.drafts.index.published" />
                    </span>
                  }
                  key="2"
                />
              </Tabs>
            </div>
            <div className="card-body">
              {tabKey === '1' && <DraftList published={false} user={user} />}
              {tabKey === '2' && <DraftList published user={user} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(Drafts)
