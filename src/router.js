import Router from 'ampersand-router'
import React from 'react'
import PublicPage from './pages/public'
import ReposPage from './pages/repos'
import qs from 'qs'
import xhr from 'xhr'

export default Router.extend({
  routes: {
    '': 'public',
    'repos': 'repos',
    'login': 'login',
    'auth/callback?code=:code': 'authCallback'
  },

  public () {
    React.render(<PublicPage/>, document.body)
  },

  repos () {
    React.render(<ReposPage/>, document.body)
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
      console.log(body)
    })
  }
})
