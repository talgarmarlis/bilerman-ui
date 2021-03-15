import React from 'react'
import { connect } from 'react-redux'
import { Layout } from 'antd'
import { withRouter } from 'react-router-dom'
import classNames from 'classnames'
import Footer from '../components/Footer'
import style from './style.module.scss'
import TopBar from '../Public/topbar'

const mapStateToProps = ({ settings }) => ({
  isGrayTopbar: settings.isGrayTopbar,
  isCardShadow: settings.isCardShadow,
  isSquaredBorders: settings.isSquaredBorders,
  isBorderless: settings.isBorderless,
  isTopbarFixed: settings.isTopbarFixed,
  authPagesColor: settings.authPagesColor,
  theme: settings.theme,
})

const AuthLayout = ({
  children,
  isGrayTopbar,
  isCardShadow,
  isSquaredBorders,
  isBorderless,
  isTopbarFixed,
  authPagesColor,
  theme,
}) => {
  return (
    <Layout>
      <Layout.Header
        className={classNames('cui__layout__header', {
          cui__layout__fixedHeader: isTopbarFixed,
          cui__layout__headerGray: isGrayTopbar,
        })}
      >
        <TopBar theme={theme} />
      </Layout.Header>
      <Layout.Content>
        <div
          className={classNames(`${style.container}`, {
            cui__layout__squaredBorders: isSquaredBorders,
            cui__layout__cardsShadow: isCardShadow,
            cui__layout__borderless: isBorderless,
            [style.white]: authPagesColor === 'white',
            [style.gray]: authPagesColor === 'gray',
          })}
          style={{
            backgroundImage:
              authPagesColor === 'image' ? 'url(resources/images/content/photos/7.jpg)' : '',
          }}
        >
          <div className={`cui__utils__content ${style.containerInner}`}>{children}</div>
        </div>
      </Layout.Content>
      <Layout.Footer>
        <Footer />
      </Layout.Footer>
    </Layout>
  )
}

export default withRouter(connect(mapStateToProps)(AuthLayout))
