export const changeTitle = value => {

  console.log('===action_TITLE', value)

  return {
    type: 'ASYNC_ACTION_TITLE',
    payload: value
  }
}

export const changeText = value => {

  console.log('===action_TEXT', value)

  return {
    type: 'ASYNC_ACTION_TEXT',
    payload: value
  }
}
