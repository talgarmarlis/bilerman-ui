import React, { Fragment } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import NProgress from 'nprogress'
import { Helmet } from 'react-helmet'
import MainLayout from './Main'
import AuthLayout from './Auth'
import PublicLayout from './Public'
import BlankLayout from './Blank'
import SettingsLayout from './Settings'
import AdminLayout from './Admin'

const Layouts = {
  main: MainLayout,
  auth: AuthLayout,
  public: PublicLayout,
  blank: BlankLayout,
  settings: SettingsLayout,
  admin: AdminLayout,
}

const mapStateToProps = ({ user }) => ({ user })
let previousPath = ''

const Layout = ({ user, children, location: { pathname, search } }) => {
  // NProgress & ScrollTop Management
  const currentPath = pathname + search
  if (currentPath !== previousPath) {
    window.scrollTo(0, 0)
    NProgress.start()
  }
  setTimeout(() => {
    NProgress.done()
    previousPath = currentPath
  }, 300)

  // Layout Rendering
  const getLayout = () => {
    // if (pathname === '/') {
    //   return 'public'
    // }
    if (pathname === '/settings') {
      return 'settings'
    }
    if (
      /^\/dashboard(?=\/|$)/i.test(pathname) ||
      /^\/ecommerce(?=\/|$)/i.test(pathname) ||
      /^\/apps(?=\/|$)/i.test(pathname) ||
      /^\/widgets(?=\/|$)/i.test(pathname) ||
      /^\/cards(?=\/|$)/i.test(pathname) ||
      /^\/ui-kits(?=\/|$)/i.test(pathname) ||
      /^\/tables(?=\/|$)/i.test(pathname) ||
      /^\/charts(?=\/|$)/i.test(pathname) ||
      /^\/icons(?=\/|$)/i.test(pathname) ||
      /^\/advanced(?=\/|$)/i.test(pathname)
    ) {
      return 'admin'
    }
    if (/^\/auth(?=\/|$)/i.test(pathname)) {
      return 'auth'
    }
    return 'main'
  }

  const Container = Layouts[getLayout()]
  const isUserAuthorized = user.authorized
  const isUserLoading = user.loading
  const isAuthLayout = getLayout() === 'auth'

  const BootstrappedLayout = () => {
    // show loader when user in check authorization process, not authorized yet and not on login pages
    if (isUserLoading && !isUserAuthorized && !isAuthLayout) {
      return null
    }
    // redirect to login page if current is not login page and user not authorized
    if (!isAuthLayout && !isUserAuthorized) {
      return <Redirect to="/auth/login" />
    }
    // in other case render previously set layout
    return <Container>{children}</Container>
  }

  return (
    <Fragment>
      <Helmet titleTemplate="Bilerman | %s" title="Where good ideas find you." />
      {BootstrappedLayout()}
    </Fragment>
  )
}

export default withRouter(connect(mapStateToProps)(Layout))
