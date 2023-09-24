import { useState } from "react";
import Header from "./componentes/Header/Header";
import Bunners from "./componentes/Bunners/Bunners";
import Comentarios from "./componentes/Comentarios/Comentarios"
import Footer from "./componentes/Footer/Footer";
import styled,{ createGlobalStyle } from "styled-components";
import itens from "./itens/itens.json";
import itensBunners from "./itensBunners/itensBunners"
import ProductCard from "./componentes/ProductCard/ProductCard";

const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
    text-decoration: none;
    width: 100%;
    display: flex;
    justify-content:center;
  }

  main{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;   

}

`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
  flex-wrap: wrap;
  width: 100%;
  background-color: #334455;

`;


function App() {

  const [priceFilter, setPriceFilter] = useState("");
  const [nameFilter, setNameFilter ] = useState("")
  const [order , setOrder ] = useState("")


  console.log("esses itens:" ,itens)

  return (
    <>
      <GlobalStyle/>
        <Header
        priceFilter={priceFilter}
        setPriceFilter={setPriceFilter}
        nameFilter={nameFilter}
        setNameFilter={setNameFilter}
        order={order}
        setOrder={setOrder}
        />

        <CardsContainer>
        {itens
     
        .filter((itens) => {
          return itens.name.toLowerCase().includes(nameFilter.toLowerCase());
        }) 
        .sort((a, b) => {
          if(order === "asc"){ return a.price > b.price ? 1 : -1}
          if(order === "desc"){ return a.price < b.price ? 1 : -1}
        })
        .map((itens) => {
          return <ProductCard
            key={itens.name}
            itens={itens}
          />
        })}
        </CardsContainer>
        <Bunners itensBunners={itensBunners}/>
        <Comentarios/>
        <Footer/>

    </>
    
  );
}


export default App;
