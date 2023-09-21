import styles from "./ProductCard.module.css";

function ProductCard({ itens }) {
  return (
    <>
      <div className={styles.container}>
        {
            
          itens.map((itens) => (
            
            <div className={styles.CardItem}>
            <img key={1} src={itens.image} className={styles.imagemFundo}/>
              <p key={2}>{itens.name}</p>
              <div className={styles.ContainerButao}>
                <button key={3} className={styles.ButaoComprar}>{itens.price}</button>
              </div>
            </div>
          ))
        }
      </div>
    </>
  );
}

export default ProductCard;
