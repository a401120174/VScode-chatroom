import React, { useRef } from "react";

const TextInput = ({ onSubmit, onChangeMsg, value }) => {
  const inputEl = useRef(null);

  //   const onTextSubmit = e => {
  //     e.preventDefault();
  //     onSubmit(inputEl.value);
  //   };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" ref={inputEl} value={value} onChange={onChangeMsg} />
        <input type="submit" value="送出" />
      </form>
    </div>
  );
};

export default TextInput;
