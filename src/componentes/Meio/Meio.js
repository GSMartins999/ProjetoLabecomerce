import { useEffect, useState, useRef } from "react";
import styles from "./Meio.module.css";
import seta from "./../../img/seta.png"

function Meio() {
  const [data, setData] = useState([]);
  const carrousel = useRef(null);
  useEffect(() => {
    fetch("http://localhost:3000/static/shoes.json")
      .then((response) => response.json())
      .then(setData);
  }, []);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carrousel.current.scrollLeft -= carrousel.current.offsetWidth
    
  };


  const handleRightClick = (e) => {
    e.preventDefault();
    carrousel.current.scrollLeft += carrousel.current.offsetWidth
  };

  if (!data || !data.length) return null;
  return (
    <>
      <main>
        <div className={styles.container}>
          <div className={styles.carrossel} ref={carrousel}>
            {data.map((item) => {
              const { id, name, price, image, infoTech } = item;
              return (
                <a href="">
                <div className={styles.item} key={id}>
                  <div className={styles.image}>
                    <img src={image} alt={name} className={styles.imagem}></img>
                    <div className={styles.info}>
                      <span className={styles.name}>{name}</span>
                      <span className={styles.infoTech}>{infoTech}</span>
                      <span className={styles.preco}>R$ {price}</span>
                    </div>
                  </div>
                </div>
                </a>
              );
            })}
          </div>
          <div className={styles.buttons}>
            <button onClick={handleLeftClick}>
              <img
                src={seta}
                alt="Scroll Left"
              />
            </button>
            <button onClick={handleRightClick}>
              <img
                src={seta}
                alt="Scroll Right"
              />
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Meio;