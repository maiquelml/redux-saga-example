import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { changeTitle } from './actions'

const Title = props => {
  console.log('===props_TITLE', props)
  const { title, changeTitle } = props
  if (!title)
    changeTitle('Default Title')

  const handleChange = event => changeTitle(event.target.value)
  return (
    <>
      <h1>My App: {title || '-'}</h1>
      <input type='text' placeholder='Title:' onChange={handleChange} />
    </>
  )
}

const mapStateToProps = state => ({
  title: state.group.title
})

const mapDispatchToProps = dispatch => bindActionCreators({ changeTitle }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Title)
