import React from "react";
import Header from "./componentes/Header/Header";
import Meio from "./componentes/Meio/Meio"
import { createGlobalStyle } from "styled-components";
import { useState } from 'react';

const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
  }

  main{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;   
}

`;

function App() {
  return (
    <>
      <GlobalStyle/>
        <Header/>
        <Meio/>
    </>
  );
}

export default App;
