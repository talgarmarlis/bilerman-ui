import React from 'react'
import { Menu, Dropdown } from 'antd'
import { connect } from 'react-redux'
import styles from './style.module.scss'

const mapStateToProps = ({ settings }) => ({
  locale: settings.locale,
})

const LanguageSwitcher = ({ dispatch, locale }) => {
  const changeLanguage = ({ key }) => {
    dispatch({
      type: 'settings/CHANGE_SETTING',
      payload: {
        setting: 'locale',
        value: key,
      },
    })
  }
  const language = locale.substr(0, 2)
  const menu = (
    <Menu selectedKeys={[locale]} onClick={changeLanguage}>
      <Menu.Item key="ky-KG">
        <span role="img" aria-label="Кыргызча" className="font-size-12 mr-2">
          🇰🇬
        </span>
        Кыргызча
      </Menu.Item>
      <Menu.Item key="ru-RU">
        <span role="img" aria-label="Русский" className="font-size-12 mr-2">
          🇷🇺
        </span>
        Русский
      </Menu.Item>
      <Menu.Item key="en-US">
        <span role="img" aria-label="English" className="font-size-12 mr-2">
          🇬🇧
        </span>
        English
      </Menu.Item>
    </Menu>
  )

  return (
    <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
      <div className={styles.dropdown}>
        <span className="text-uppercase">{language}</span>
      </div>
    </Dropdown>
  )
}

export default connect(mapStateToProps)(LanguageSwitcher)
