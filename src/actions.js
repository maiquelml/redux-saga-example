export const changeTitle = value => {

  console.log(value)

  return {
    type: 'ACTION_TITLE',
    payload: value
  }
}
