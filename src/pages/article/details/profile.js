import React from 'react'
import { FormattedMessage } from 'react-intl'
import Avatar from 'components/blrmn/Avatar'

const Profile = ({ author }) => {
  return (
    <div className="card border-0 shadow-none">
      <div className="card-body">
        <div className="d-flex align-items-center flex-wrap pb-4 pt-4 border-top border-bottom border-red">
          <div className="mb-3 mr-3 flex-shrink-0">
            <Avatar author={author} size={110} />
          </div>
          <div className="mr-auto mb-3">
            <div className="text-muted">Written by</div>
            <div className="font-weight-bold font-size-16 text-dark">{`${author.name} ${author.surname}`}</div>
            <div className="mb-2">{author.email}</div>
            {author.bio && <p className="font-italic">{author.bio}</p>}
          </div>
          <div className="d-none">
            <a
              href="#"
              onClick={event => event.preventDefault()}
              className="btn btn-sm btn-primary"
            >
              <FormattedMessage id="article.details.profile.follow" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
