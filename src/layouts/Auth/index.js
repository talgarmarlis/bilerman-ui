import React from 'react'
import { connect } from 'react-redux'
import { Layout } from 'antd'
import { Link, withRouter } from 'react-router-dom'
import classNames from 'classnames'
import Logo from '../components/Logo'
import Footer from '../components/Footer'
import style from './style.module.scss'

const mapStateToProps = ({ settings }) => ({
  isGrayTopbar: settings.isGrayTopbar,
  isCardShadow: settings.isCardShadow,
  isSquaredBorders: settings.isSquaredBorders,
  isBorderless: settings.isBorderless,
  authPagesColor: settings.authPagesColor,
  theme: settings.theme,
})

const AuthLayout = ({
  children,
  isGrayTopbar,
  isCardShadow,
  isSquaredBorders,
  isBorderless,
  authPagesColor,
  theme,
}) => {
  return (
    <Layout>
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
          <div
            className={classNames(`${style.topbar}`, {
              [style.topbarGray]: isGrayTopbar,
            })}
          >
            <Logo theme={theme} />
            <div className="d-none d-sm-block">
              <Link to="/auth/login" className="font-size-16 kit__utils__link mr-3">
                Sign in
              </Link>
              <Link to="/auth/register" className="font-size-16 kit__utils__link">
                Sign up
              </Link>
            </div>
          </div>
          <div className={style.containerInner}>{children}</div>
          <Footer />
        </div>
      </Layout.Content>
    </Layout>
  )
}

export default withRouter(connect(mapStateToProps)(AuthLayout))
