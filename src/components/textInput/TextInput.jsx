import React from "react";
import { useRecoilState } from "recoil";
import textState from "../../atom/textState";

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <label htmlFor="input-text">
        Entrada:
        <input type="text" value={text} onChange={onChange} />
      </label>
      <br />
      Saída: {text}
    </div>
  );
}
export default TextInput;
