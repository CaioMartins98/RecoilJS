import React from "react";
import TextInput from "../textInput/TextInput";
import CharacterCount from "../characterCount/CharacterCount";

function CharacterCounter() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
}

export default CharacterCounter;
