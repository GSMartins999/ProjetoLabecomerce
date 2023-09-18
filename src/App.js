import React from "react";
import Header from "./componentes/Header/Header";
import { createGlobalStyle } from "styled-components";
import { useState } from 'react';

const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle/>
        <Header/>
    </>
  );
}

export default App;
