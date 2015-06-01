import Model from 'ampersand-model'

export default Model.extend({
  url: 'https://api.github.com/user',

  initialize () {
    if (window.localStorage.token) {
      this.token = window.localStorage.token
    }

    this.on('change:token', (model, val) => {
      window.localStorage.token = val
      this.fetchInitialData()
    })
  },

  props: {
    login: 'string',
    full_name: 'string'
  },

  session: {
    token: 'string'
  },

  fetchInitialData () {
    if (this.token) {
      this.fetch()
    }
  },

  ajaxConfig () {
    return {
      headers: {
        'Authorization': 'token ' + this.token
      }
    }
  }
})









