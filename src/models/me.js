import Model from 'ampersand-model'

export default Model.extend({
  initialize () {
    if (window.localStorage.token) {
      this.token = window.localStorage.token
    }

    this.on('change:token', (model, val) => {
      window.localStorage.token = val
    })
  },

  props: {
    login: 'string',
    full_name: 'string'
  },

  session: {
    token: 'string'
  }
})
