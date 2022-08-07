import React from 'react'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'
import { Menu, Dropdown, Avatar } from "antd";
import config from 'config'
import styles from './style.module.scss'

const mapStateToProps = ({ user, settings }) => ({ user, theme: settings.theme })

const ProfileMenu = ({ dispatch, user, theme }) => {
  const logout = e => {
    e.preventDefault()
    dispatch({
      type: 'user/LOGOUT',
    })
  }

  const setTheme = nextTheme => {
    dispatch({
      type: 'settings/SET_THEME',
      payload: {
        theme: nextTheme,
      },
    })
    dispatch({
      type: 'settings/CHANGE_SETTING',
      payload: {
        setting: 'menuColor',
        value: nextTheme === 'dark' ? 'dark' : 'light',
      },
    })
  }

  const menu = (
    <Menu selectable={false}>
      <Menu.Item>
        <strong>
          <FormattedMessage id="topBar.profileMenu.hello" />, {user.name || 'Anonymous'}
        </strong>
        <div>{user.email}</div>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <a href="/author/profile">
          <i className="fe fe-user mr-2" />
          <FormattedMessage id="topBar.profileMenu.editProfile" />
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href="/article/edit">
          <i className="fe fe-feather mr-2" />
          <FormattedMessage id="topBar.profileMenu.newStory" />
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href="/author/drafts">
          <i className="fe fe-layers mr-2" />
          <FormattedMessage id="topBar.profileMenu.drafts" />
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href="#" onClick={e => e.preventDefault()}>
          <i className="fe fe-bookmark mr-2" />
          <FormattedMessage id="topBar.profileMenu.readingList" />
        </a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <a
          role="button"
          tabIndex="0"
          onFocus={e => {
            e.preventDefault()
          }}
          onKeyPress={() => setTheme(theme === 'default' ? 'dark' : 'default')}
          onClick={() => setTheme(theme === 'default' ? 'dark' : 'default')}
        >
          {theme === 'default' && <i className="fe fe-moon mr-2" />}
          {theme !== 'default' && <i className="fe fe-sun mr-2" />}
          <FormattedMessage id="topBar.profileMenu.switchTheme" />
        </a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <a href="#" onClick={logout}>
          <i className="fe fe-log-out mr-2" />
          <FormattedMessage id="topBar.profileMenu.logout" />
        </a>
      </Menu.Item>
    </Menu>
  )
  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <div className={styles.dropdown}>
        {user.avatar && (
          <Avatar
            className={styles.avatar}
            shape="circle"
            size="large"
            src={`${config.apiUrl}/users/${user.id}/avatar`}
            icon={<img src="/resources/images/avatars/avatar-default.png" alt={user.name} />}
          />
        )}
        {!user.avatar && (
          <Avatar
            className={styles.avatar}
            shape="circle"
            size="large"
            src="/resources/images/avatars/avatar-default.png"
          />
        )}
      </div>
    </Dropdown>
  )
}

export default connect(mapStateToProps)(ProfileMenu)
