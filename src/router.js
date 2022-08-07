import React, { Suspense } from 'react'
import { Helmet } from 'react-helmet'
import { Route, Redirect, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import Layout from 'layouts'
import routes from './routes'

const mapStateToProps = ({ settings }) => ({
  routerAnimation: settings.routerAnimation,
})

const Router = ({ history, routerAnimation }) => {
  return (
    <ConnectedRouter history={history}>
      <Layout>
        <Route
          render={state => {
            const { location } = state
            return (
              <SwitchTransition>
                <CSSTransition
                  key={location.pathname}
                  appear
                  classNames={routerAnimation}
                  timeout={routerAnimation === 'none' ? 0 : 300}
                >
                  <Switch location={location}>
                    {/* <Route exact path="/" render={() => <Redirect to="/dashboard/alpha" />} /> */}
                    {routes.map(({ path, Component, exact, title }) => (
                      <Route
                        path={path}
                        key={path}
                        exact={exact}
                        render={routeProps => {
                          return (
                            <div className={routerAnimation}>
                              <Suspense fallback={null}>
                                {title && <Helmet title={title} />}
                                <Component {...routeProps} />
                              </Suspense>
                            </div>
                          )
                        }}
                      />
                    ))}
                    <Redirect to="/error/404" />
                  </Switch>
                </CSSTransition>
              </SwitchTransition>
            )
          }}
        />
      </Layout>
    </ConnectedRouter>
  )
}

export default connect(mapStateToProps)(Router)
