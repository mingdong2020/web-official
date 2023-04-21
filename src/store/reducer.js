import library from "./library";
import center from "./center";

const reducer = (state = {...center, ...library}, action) => {
  switch(action.type) {
    case 'SET_RESERVE':
      return {
        ...state,
        reserve: action.reserve
      }
    case 'SET_TOAST':
      return {
        ...state,
        toast: action.toast
      }
    case 'SET_TOGGLE':
      return {
        ...state,
        toggle: action.toggle
      }
    default:
      return state;
  }
}
export default reducer;