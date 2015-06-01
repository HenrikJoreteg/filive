import app from 'ampersand-app'
import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

export default React.createClass({
  mixins: [ampersandMixin],

  render () {
    return (
      <div className='container'>
        <header role='banner'>
          <h1>Repos</h1>
        </header>
        <div>
          {this.props.repos.map((repo) => {
            return <div>{repo.full_name}</div>
          })}
        </div>
      </div>
    )
  }
})
