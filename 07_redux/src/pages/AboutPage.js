import React from 'react'
import { connect } from 'react-redux'

const AboutPage = (props) => {
  return <h1>AboutPage <small>{props.counter}</small></h1>
}

function mapStateToProps (state) {
  return { counter: state.counter }
}

export default connect(mapStateToProps)(AboutPage)
