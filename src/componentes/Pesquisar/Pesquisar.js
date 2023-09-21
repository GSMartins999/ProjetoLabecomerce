import styles from "./Pesquisar.module.css"
import { BiSearchAlt } from 'react-icons/bi'
import { useState } from "react";


function Pesquisar (props){

  const[pesquisa, setPesquisa] = useState("");


    return (
        <>
          <div className={styles.pesquisar}>
          
          <button type="submit" className={styles.lupa}>
                <BiSearchAlt className={styles.iconeLupa}/>
          </button>
          <form className={styles.pesquisarForm}>
          <input
            name="search"
            id="search"
            required
           type="text" placeholder="Pesquisar" value={props.nameFilter} onChange={(e) => props.setNameFilter(e.target.value)}             
          />
          </form>
        </div>
        </>
    );
}

export default Pesquisar