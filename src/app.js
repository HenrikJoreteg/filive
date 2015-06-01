import React from 'react'

const Hello = React.createClass({
  render () {
    return <div>Hello, {this.props.name}</div>
  }
})

React.render(<Hello name='filive'/>, document.body)
