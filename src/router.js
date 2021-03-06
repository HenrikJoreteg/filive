import app from 'ampersand-app'
import Router from 'ampersand-router'
import React from 'react'
import PublicPage from './pages/public'
import ReposPage from './pages/repos'
import Layout from './components/layout'
import qs from 'qs'
import xhr from 'xhr'

function auth(handlerName) {
  return function () {
    if (app.me.token) {
      this[handlerName].apply(this, arguments)
    } else {
      this.redirectTo('/')
    }
  }
}

export default Router.extend({
  renderPage (page, opts = {layout: true}) {
    if (opts.layout) {
      page = (
        <Layout>
          {page}
        </Layout>
      )
    }

    React.render(page, document.body)
  },

  routes: {
    '': 'public',
    'repos': auth('repos'),
    'login': 'login',
    'logout': 'logout',
    'auth/callback?code=:code': 'authCallback'
  },

  public () {
    this.renderPage(<PublicPage/>, {layout: false})
  },

  repos () {
    this.renderPage(<ReposPage repos={app.me.repos}/>)
  },

  logout () {
    window.localStorage.clear()
    window.location = '/'
  },

  login () {
    window.location = 'https://github.com/login/oauth/authorize?' + qs.stringify({
      scope: 'user,repo',
      redirect_uri: window.location.origin + '/auth/callback',
      client_id: 'f8dd69187841cdd22a26'
    })
  },

  authCallback (code) {
    console.log(code)

    xhr({
      url: 'http://labelr-dev.herokuapp.com/authenticate/' + code,
      json: true
    }, (err, req, body) => {
      app.me.token = body.token

      this.redirectTo('/repos')
    })
  }
})
