import types from "./types";

function addItem(text) {
  return {
    type: types.ADD_ITEM,
    text
  };
}

function removeItem(id) {
  return {
    type: types.REMOVE_ITEM,
    id
  };
}
export default {
  addItem,
  removeItem
};
