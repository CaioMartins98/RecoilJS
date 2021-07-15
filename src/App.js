import React from "react";
import { RecoilRoot } from "recoil";
import CharacterCounter from "./components/characterCounter/CharacterCounter";

function App() {
  return (
    <RecoilRoot>
      <h1>Estudo sobre RecoilJS</h1>
      <CharacterCounter />
    </RecoilRoot>
  );
}

export default App;
