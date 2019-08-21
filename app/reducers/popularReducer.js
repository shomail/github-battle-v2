export function popularReducer(state, action) {
  if (action.type === 'success') {
    return {
      ...state,
      [action.selectedLanguage]: action.repos,
      error: null,
    };
  }
  if (action.type === 'error') {
    return {
      ...state,
      error: action.error.message,
    };
  }
  throw new Error(`that action type is not supported!`);
}
