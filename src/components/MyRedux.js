import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import types from "./../reduks/types";

const MyRedux = () => {
  const [text, setText] = useState("Write your product name here");

  const dispatch = useDispatch();
  const deleteItem = useCallback(
    id => dispatch({ type: types.REMOVE_ITEM, id }),
    [dispatch]
  );
  const addItem = text => dispatch({ type: types.ADD_ITEM, text });

  const items = useSelector(state => state.items);
  const list = items.map(item => {
    return (
      <li key={item.id}>
        <p>{item.name}</p>
        <button onClick={() => deleteItem(item.id)}>Remove</button>
      </li>
    );
  });

  return (
    <>
      <p>Myredux</p>
      <form
        onSubmit={e => {
          e.preventDefault();
          addItem(text);
        }}
      >
        <label>Write shop item to add</label>
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
      {JSON.stringify(items, undefined, 2)}
      <ul>{list}</ul>
    </>
  );
};

export default MyRedux;
