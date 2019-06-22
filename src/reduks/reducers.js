import types from "./types";

const INITIALSTATE = {
  items: [
    {
      id: 0,
      name: "milk"
    },
    {
      id: 1,
      name: "meat"
    },
    {
      id: 2,
      name: "chips"
    }
  ]
};

let id = 3;

function shopApp(state = INITIALSTATE, action) {
  switch (action.type) {
    case types.ADD_ITEM:
      const item = { id, name: action.text };
      id++;
      return { ...state, items: [...state.items, item] };
    case types.REMOVE_ITEM:
      const removedItems = [...state.items].filter(
        item => item.id !== action.id
      );
      console.log(removedItems, action.id);
      return { ...state, items: removedItems };
    default:
      return state;
  }
}

export default shopApp;
