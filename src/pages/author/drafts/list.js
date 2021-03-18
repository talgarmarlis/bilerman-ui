import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import { Dropdown, Menu, Modal, Pagination } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import moment from 'moment'
import { draftService } from 'services'

const { confirm } = Modal

class DraftList extends Component {
  state = {
    drafts: [],
    pageSize: 10,
  }

  componentDidMount() {
    this.load()
  }

  load = pageNumber => {
    const { user, published } = this.props
    const { pageSize } = this.state
    draftService.getUserDrafts(user.id, published, pageNumber, pageSize).then(result => {
      const page = result.data
      this.setState({ drafts: page.content, page })
    })
  }

  handleDelete = draft => {
    confirm({
      title: 'Are you sure delete this article?',
      icon: <DeleteOutlined />,
      content: (
        <div>
          <div className="utils__title">
            <strong>{draft.title}</strong>
          </div>
          <div className="utils__titleDescription">{draft.subtitle}</div>
        </div>
      ),
      okText: 'Delete',
      okType: 'danger',
      cancelText: 'Cancel',
      onOk: () => this.deleteDraft(draft.id),
    })
  }

  deleteDraft = id => {
    draftService.deleteDraft(id).then(() => {
      this.load()
    })
  }

  onPageChanged = (pageNumber, pageSize) => {
    this.load(pageNumber - 1, pageSize)
  }

  onPageSizeChange = (current, pageSize) => {
    this.setState({ pageSize })
    this.load()
  }

  render() {
    const { drafts, page, pageSize } = this.state

    return (
      <>
        {drafts.length === 0 &&
        <div className="text-center mb-3 py-4 bg-light rounded">
          <FormattedMessage id="author.drafts.list.empty" />
        </div>}
        {drafts.map(draft => (
          <div className="d-flex flex-nowrap align-items-start pt-4" key={draft.id}>
            <div className="flex-grow-1 border-bottom">
              <div className="d-flex flex-wrap mb-2">
                <div className="mr-auto">
                  <div className="text-gray-6">
                    <span className="text-dark font-weight-bold">
                      {draft.title && draft.title}
                      {!draft.title && 'Untitled draft'}
                    </span>
                  </div>
                </div>
                <div className="nav-item dropdown">
                  <Dropdown
                    overlay={
                      <Menu>
                        <Menu.Item>
                          <a href={`/#/article/editor/${draft.id}`}>
                            <i className="dropdown-icon fe fe-edit mr-1" />
                            <FormattedMessage id="author.drafts.list.edit" />
                          </a>
                        </Menu.Item>
                        <Menu.Item>
                          <a href="javascript: void(0);" onClick={() => this.handleDelete(draft)}>
                            <i className="dropdown-icon fe fe-trash mr-1" />
                            <FormattedMessage id="author.drafts.list.delete" />
                          </a>
                        </Menu.Item>
                      </Menu>
                    }
                    placement="bottomRight"
                  >
                    <a className="nav-link dropdown-toggle pt-sm-0">
                      <FormattedMessage id="author.drafts.list.actions" />
                    </a>
                  </Dropdown>
                </div>
              </div>
              <div className="mb-3">{draft.subtitle}</div>
              <p className="text-muted mb-2">
                last edited {moment(new Date(draft.updatedAt)).fromNow()}
              </p>
            </div>
          </div>
        ))}
        {page && page.totalPages > 1 && (
          <div className="mb-2">
            <Pagination
              showSizeChanger
              defaultCurrent={1}
              current={page.number + 1}
              total={page.totalElements}
              pageSize={pageSize}
              onChange={this.onPageChanged}
              onShowSizeChange={this.onPageSizeChange}
            />
          </div>
        )}
      </>
    )
  }
}

export default DraftList
