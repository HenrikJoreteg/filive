import Model from 'ampersand-model'
import githubMixin from '../helpers/github-mixin'
import RepoCollection from './repo-collection'

export default Model.extend(githubMixin, {
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

  collections: {
    repos: RepoCollection
  },

  fetchInitialData () {
    if (this.token) {
      this.fetch()
      this.repos.fetch()
    }
  }
})









