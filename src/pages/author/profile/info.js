import React, {useState} from 'react'
import { FormattedMessage } from 'react-intl'
import {connect} from "react-redux";
import {Upload} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import {userService} from "services";
import config from "config";
import PublicationForm from "./form";
import style from './style.module.scss'

const mapStateToProps = ({ user }) => ({user})
const Info = ({user, author }) => {

  const [formStatus, setFormStatus] = useState(false);
  const [avatarStatus, setAvatarStatus] = useState(author.avatar && true);
  const [avatar, setAvatar] = useState(author.avatar);

  const handleFileChange = (file) => {
    userService.uploadAvatar(file).then(result => {
      setAvatarStatus(true);
      setAvatar(result.data.avatar)
    })
  }

  return (
    <div>
      {user && user.id === author.id &&
      <PublicationForm
        enabled={formStatus}
        toggleForm={() => setFormStatus(false)}
        user={author}
        // handleImage={}
      />
      }
      <div className="card border-0 shadow-none">
        <div className="card-body">
          <div className="row border-bottom border-top border-gray-3">
            <div className="col-lg-6 col-md-12 mb-4 mt-4">
              <div className="d-flex align-items-center">
                <div className="mr-3 flex-shrink-0">
                  <div className={style.item}>
                    <div className={style.itemContent}>
                      {avatarStatus &&
                      <img
                        src={`${config.apiUrl}/users/${author.id}/avatar?v=${avatar}`}
                        alt={author.name}
                        style={{objectFit:"cover", height:"inherit", width:"inherit"}}
                        onError={(e)=>{e.target.onerror = null; e.target.src="/resources/images/avatars/avatar-default.png"}}
                      />}
                      {!avatarStatus && <img src="/resources/images/avatars/avatar-default.png" alt={author.name} />}
                      {user && user.id === author.id &&
                        <div className={style.itemControl}>
                          <div className={style.itemControlContainer}>
                            <Upload
                              multiple={false}
                              customRequest={e => handleFileChange(e.file)}
                              showUploadList={false}
                            >
                              <div className="text-white font-weight-bold">
                                <PlusOutlined />
                                <div><FormattedMessage id="author.profile.info.upload" /></div>
                              </div>
                            </Upload>
                          </div>
                        </div>
                      }
                    </div>
                  </div>
                </div>
                <div className="mr-auto">
                  <div className="font-weight-bold font-size-28 text-dark">{`${author.name} ${author.surname}`}</div>
                  <div className="mb-2">{author.email}</div>
                  {author.bio && <p className="font-italic font-size-14">{author.bio}</p>}
                </div>
                {user && user.id === author.id &&
                <div className="ml-2">
                  <a
                    href="javascript: void(0);"
                    onClick={() => setFormStatus(!formStatus)}
                    className="btn btn-sm btn-primary"
                  >
                    <i className="fe fe-edit-2 mr-2" /> <FormattedMessage id="author.profile.info.editProfile" />
                  </a>
                </div>
                }
              </div>
            </div>
            <div className="col-lg-6 col-md-12 d-flex align-items-center mb-4 mt-4">
              <div className={`${style.status} bg-gray-3 d-none d-lg-block`} />
              <div className="d-flex flex-nowrap align-items-center flex-column mr-auto">
                <div className="text-center">
                  <div className="font-size-18">
                    <FormattedMessage id="author.profile.info.totalArticles" />
                  </div>
                  <div className="font-weight-bold font-size-24 text-primary mb-1">27</div>
                </div>
              </div>
              <div className="d-flex flex-nowrap align-items-center flex-column mr-auto">
                <div className="text-center">
                  <div className="font-size-18">
                    <FormattedMessage id="author.profile.info.totalContribution" />
                  </div>
                  <div className="font-weight-bold font-size-24 text-primary mb-1">31</div>
                </div>
              </div>
              <div className="d-flex flex-nowrap align-items-center flex-column">
                <div className="text-center">
                  <div className="font-size-18">
                    <FormattedMessage id="author.profile.info.followers" />
                  </div>
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

export default connect(mapStateToProps)(Info)
