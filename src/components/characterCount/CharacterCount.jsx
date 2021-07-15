import React from "react";
import { selector, useRecoilValue } from "recoil";

import textState from "../../atom/textState";

const charCountState = selector({
  key: "charCountState",
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  },
});

function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <> Contagem de caracteres: {count} </>;
}

export default CharacterCount;
