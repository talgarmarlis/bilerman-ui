import React, { Fragment } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import NProgress from 'nprogress'
import { Helmet } from 'react-helmet'
import routes from 'routes'
import MainLayout from './Main'
import AuthLayout from './Auth'
import PublicLayout from './Public'
import BlankLayout from './Blank'
import AdminLayout from './Admin'
import EditorLayout from './Editor'

const Layouts = {
  main: MainLayout,
  auth: AuthLayout,
  public: PublicLayout,
  blank: BlankLayout,
  admin: AdminLayout,
  editor: EditorLayout,
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

  const isPrivate = () => {
    for (let i = 0; i < routes.length; i += 1) {
      if (routes[i].path.includes(pathname)) {
        if (routes[i].private) return true
        return false
      }
    }
    return false
  }

  const isUserAuthorized = user.authorized
  const isUserLoading = user.loading
  const isAuthPage = /^\/auth(?=\/|$)/i.test(pathname)
  // Layout Rendering
  const getLayout = () => {
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
    )
      return 'admin'
    if (pathname.includes('/article/editor')) return 'editor'
    if (isUserAuthorized) return 'main'
    if (isAuthPage) return 'auth'
    return 'public'
  }

  const Container = Layouts[getLayout()]
  const isPrivatePage = isPrivate()

  const BootstrappedLayout = () => {
    // show loader when user in check authorization process, not authorized yet and not on login pages
    if (isUserLoading && !isUserAuthorized && !isAuthPage) {
      return null
    }
    // redirect to login page if current is not login page and user not authorized
    if (isPrivatePage && !isUserAuthorized) {
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
