import { useState } from "react";
import logo from "./../../img/logo.png";
import styles from './Header.module.css';


function Header(){
  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <>
    <div className={styles.fundo}>
      <div className={styles.Container}>
        <p className={styles.Texto}>
          <h1>Point Tech</h1>
        </p>
        <img className={styles.Logo} src={logo}/>
      </div>

      <div>
        Pesquisar
      </div>


      <nav className= {`${styles.menuSanduwich} ${ showMenu ? styles.show : '' }`} onClick={toggleMenu}>
        <a href="" target="_blank" className={styles.LinksSandWich}>Home</a>
        <a href="" target="_blank" className={styles.LinksSandWich}>Carrinho</a>
        <a href="https://www.instagram.com/gsmartins216/" target="_blank" className={styles.LinksSandWich}>Suporte</a>
        <a href="" target="_blank" className={styles.LinksSandWich}>Configurações</a> 
      </nav>
      
      <div 
        className={styles.MenuButton} 
        onClick={toggleMenu}
      >
          <span className={styles.Linha}></span>
          <span className={styles.Linha}></span>
          <span className={styles.Linha}></span>
      </div>


    </div>      
      
    </>
  );
}
export default Header;
