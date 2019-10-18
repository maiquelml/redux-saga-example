

const INITIAL_VALUES = {
  title: null
}

export const rootReducers = (state = INITIAL_VALUES, action) => {
  if (action.type === 'ACTION_TITLE') return ({
    ...state,
    title: action.payload
  })
  return state
}
