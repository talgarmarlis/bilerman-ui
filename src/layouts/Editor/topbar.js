import React from 'react'
import { Button } from "antd";
import { FormattedMessage } from "react-intl";
import Logo from '../components/Logo'
import UserMenu from '../components/UserMenu'
import style from './style.module.scss'

const TopBar = ({ theme, edited, toggleForm }) => {
  return (
    <div className={style.topbar}>
      <div className="container-xl d-flex flex-row flex-nowrap align-items-center">
        <div className="mr-3">
          <Logo theme={theme} />
        </div>
        <div className="d-none d-md-block text-primary mr-auto">Saved</div>
        <div className="mb-0 mr-auto" />
        <div>
          <Button type="primary" disabled={!edited} onClick={toggleForm} size="small" shape="round" className="mr-3">
            <FormattedMessage id="article.editor.form.publish" />
          </Button>
        </div>
        <div>
          <UserMenu />
        </div>
      </div>
    </div>
  )
}

export default TopBar
