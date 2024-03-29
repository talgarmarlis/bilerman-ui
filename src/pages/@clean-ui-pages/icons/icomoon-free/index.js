import React from 'react'
import { Tooltip } from 'antd'
import { Helmet } from 'react-helmet'
import { iconsData } from './data.json'

const IconsIcomoonFree = () => {
  return (
    <div>
      <Helmet title="Icons / Icomoon Free" />
      <div className="kit__utils__heading">
        <h5>
          <span className="mr-3">Icomoon Free</span>
          <a
            href="pages/@clean-ui-pages/icons/icomoon-free/index#icons-icomoon"
            rel="noopener noreferrer"
            target="_blank"
            className="btn btn-sm btn-light"
          >
            Official Documentation
            <i className="fe fe-corner-right-up" />
          </a>
        </h5>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-lg-12">
              <h5 className="text-black">
                <strong>
                  A package of flat vector icons together with an installable ligature font
                </strong>
              </h5>
              <p className="text-muted">
                The complete set of 490 icons in Icomoon Free v1.0.0
                <br />
                License: MIT License. You can use it for commercial projects, open source projects,
                or really just about whatever you want
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 offset-xl-3">
              <h3 className="text-block mt-5 mb-4 text-center">
                <strong>General Icons</strong>
              </h3>
              <ul className="kit__utils__iconPresent list-unstyled">
                {iconsData.map(icon => (
                  <Tooltip title={icon} key={icon}>
                    <li>
                      <i className={icon} />
                    </li>
                  </Tooltip>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IconsIcomoonFree
