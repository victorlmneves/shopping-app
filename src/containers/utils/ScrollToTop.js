import React from 'react'
import { withRouter } from 'react-router-dom'

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    const hash = this.props.location.hash
    const idElm = hash.replace('#', '')
    const elem = document.getElementById(idElm)

    if (
      this.props.location !== prevProps.location &&
      !this.props.location.hash
    ) {
      window.scrollTo(0, 0)
    }

    if (
      this.props.location.pathname === prevProps.location.pathname &&
      this.props.location.hash
    ) {
      elem.scrollIntoView({
        behaviour: 'smooth',
        block: 'start',
        inline: 'center',
      })
    }

    if (
      this.props.location.pathname !== prevProps.location.pathname &&
      this.props.location.hash
    ) {
      elem.scrollIntoView({
        behaviour: 'smooth',
        block: 'start',
        inline: 'center',
      })
    }
  }

  render() {
    return this.props.children
  }
}

export default withRouter(ScrollToTop)
