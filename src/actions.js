export const changeTitle = value => {

  console.log(value)

  return {
    type: 'ASYNC_ACTION_TITLE',
    payload: value
  }
}
