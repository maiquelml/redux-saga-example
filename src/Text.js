import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { changeText } from './actions'

const Text = props => {
  console.log('===props_TEXT', props)
  const { text, changeText } = props

  const handleChange = event => changeText(event.target.value)

  return (
    <>
      <div style={{ marginTop: '50px' }}>{text}</div>
      <textarea placeholder='Text:' onChange={handleChange}></textarea>
    </>
  )
}

const mapStateToProps = state => ({
  text: state.group.text
})

const mapDispatchToProps = dispatch => bindActionCreators({ changeText }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Text)
