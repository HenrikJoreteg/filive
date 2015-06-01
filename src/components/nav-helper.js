import React from 'react'
import localLinks from 'local-links'

export default React.createClass({
  onClick (event) {
    const pathname = localLinks.getLocalPathname(event)

    if (pathname) {
      event.preventDefault()
      app.router.history.navigate(pathname)
    }
  },

  render () {
    return (
      <div onClick={this.onClick} {...this.props}>
        {this.props.children}
      </div>
    )
  }
})
