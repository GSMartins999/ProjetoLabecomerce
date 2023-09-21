import { useState } from "react";
import Header from "./componentes/Header/Header";
import Bunners from "./componentes/Bunners/Bunners";
import Comentarios from "./componentes/Comentarios/Comentarios"
import Footer from "./componentes/Footer/Footer";
import { createGlobalStyle } from "styled-components";
import itens from "./itens/itens";
import itensBunners from "./itensBunners/itensBunners"
import ProductCard from "./componentes/ProductCard/ProductCard";

const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
    text-decoration: none;
  }

  main{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;   
}

`;
const nome = "Giovanni";



function App() {

  return (
    <>
      <GlobalStyle/>
        <Header/>
        <ProductCard itens={itens} nome={nome}/>
        <Bunners itensBunners={itensBunners}/>
        <Comentarios/>
        <Footer/>
    </>
  );
}


export default App;
