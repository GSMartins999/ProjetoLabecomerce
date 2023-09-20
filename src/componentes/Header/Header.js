import { useState } from "react";
import logo from "./../../img/logo.png";
import styles from "./Header.module.css";
import lupa from "./../../img/lupa.png";

function Header(props) {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const [data, setData ] = useState([]);


  return (
    <>
      <div className={styles.fundo}>
        <div className={styles.Container}>
          <p className={styles.Texto}>
            <h1>Point Tech</h1>
          </p>
          <img className={styles.Logo} src={logo} />
        </div>

     
        <div className={styles.pesquisar}>
          <img src={lupa} className={styles.lupa} />
          <input
            name="search" id="search"
            className={styles.pesquisarTexto}
            value={props.nameFilter} onChange={(e) => props.setNameFilter(e.target.value)}
            placeholder="Pesquisar"
            // onChange={handleSearch}
            // value={props.pesquisa}
          />
          {/* <ul>
              <li>
                <p>
                    Pika
                </p>
              </li>
              <li>
                <p>
                    Pika
                </p>
              </li>
          </ul> */}
        </div>

        <div className={styles.Categorias}>
            <select className={styles.selecionar}>
              <ul className={styles.listagem}>
                <li>
                  Olá
                </li>
                <li>
                  Olá
                </li>
                <li>
                  Olá
                </li>
              </ul>
            </select>
        </div>
        <nav
          className={`${styles.menuSanduwich} ${showMenu ? styles.show : ""}`}
          onClick={toggleMenu}
        >
          <a href="" target="_blank" className={styles.LinksSandWich}>
            Home
          </a>
          <a href="" target="_blank" className={styles.LinksSandWich}>
            Carrinho
          </a>
          <a
            href="https://www.instagram.com/gsmartins216/"
            target="_blank"
            className={styles.LinksSandWich}
          >
            Suporte
          </a>
          <a href="" target="_blank" className={styles.LinksSandWich}>
            Configurações
          </a>
        </nav>

        <div className={styles.MenuButton} onClick={toggleMenu}>
          <span className={styles.Linha}></span>
          <span className={styles.Linha}></span>
          <span className={styles.Linha}></span>
        </div>
      </div>
    </>
  );
}
export default Header;
