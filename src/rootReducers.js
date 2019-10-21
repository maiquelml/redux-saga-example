

const INITIAL_VALUES = {
  title: null,
  text: null,
}

export const rootReducers = (state = INITIAL_VALUES, action) => {
  if (action.type === 'ACTION_TITLE') return ({
    ...state,
    title: action.payload
  })

  if (action.type === 'ACTION_TEXT') return ({
    ...state,
    text: action.payload
  })

  return state
}
