export function selectCharacterRequest(id) {
  return {
    type: "SELECT_CHARACTER_REQUEST",
    id,
  };
}

export function selectCharacterSuccess(character) {
  return {
    type: "SELECT_CHARACTER_SUCCESS",
    character,
  };
}
