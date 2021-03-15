import React from 'react'
import Avatar from 'components/blrmn/Avatar'
import style from './style.module.scss'

const Info = ({ author }) => {
  return (
    <div>
      <div className="card border-0 shadow-none">
        <div className="card-body">
          <div className="row border-bottom border-top border-gray-3">
            <div className="col-lg-6 col-md-12 mb-4 mt-4">
              <div className="d-flex align-items-center">
                <div className="mr-3 flex-shrink-0">
                  <Avatar author={author} size={110} />
                </div>
                <div className="mr-auto">
                  <div className="font-weight-bold font-size-28 text-dark">{`${author.name} ${author.surname}`}</div>
                  <div className="mb-2">{author.email}</div>
                  {author.bio && <p className="font-italic font-size-14">{author.bio}</p>}
                </div>
                <div className="d-none ml-2">
                  <a
                    href="#"
                    onClick={event => event.preventDefault()}
                    className="btn btn-sm btn-primary"
                  >
                    Follow
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 d-flex align-items-center mb-4 mt-4">
              <div className={`${style.status} bg-gray-3 d-none d-lg-block`} />
              <div className="d-flex flex-nowrap align-items-center flex-column mr-auto">
                <div className="text-center">
                  <div className="font-size-18">Total articles</div>
                  <div className="font-weight-bold font-size-24 text-primary mb-1">27</div>
                </div>
              </div>
              <div className="d-flex flex-nowrap align-items-center flex-column mr-auto">
                <div className="text-center">
                  <div className="font-size-18">Total contribution</div>
                  <div className="font-weight-bold font-size-24 text-primary mb-1">31</div>
                </div>
              </div>
              <div className="d-flex flex-nowrap align-items-center flex-column">
                <div className="text-center">
                  <div className="font-size-18">Followers</div>
                  <div className="font-weight-bold font-size-24 text-primary mb-1">19</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
