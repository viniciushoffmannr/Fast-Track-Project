export default function name(state = [], action) {
  switch (action.type) {
    case "SELECT_CHARACTER_SUCCESS":
      return [action.character];

    default:
      return state;
  }
}
