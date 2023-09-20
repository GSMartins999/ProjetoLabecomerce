import styles from "./Bunners.module.css"


function Bunners (){

    return(

        <>
        <div className={styles.Container_Burner}>
              
              <div className={styles.Buner}>
                  <div className={styles.BunerImg}>
                      <a href="">img aqui</a>
                  </div>
                  <div className={styles.BunerTexto}>
                      <p>Texto Aqui</p>
                  </div>
              </div>
              <div className={styles.Buner}>
                  <div className={styles.BunerImg}>
                      <a href="">img aqui</a>
                  </div>
                  <div className={styles.BunerTexto}>
                      <p>Texto Aqui</p>
                  </div>
              </div>
              <div className={styles.Buner}>
                  <div className={styles.BunerImg}>
                      <a href="">img aqui</a>
                  </div>
                  <div className={styles.BunerTexto}>
                      <p>Texto Aqui</p>
                  </div>
              </div>
              <div className={styles.Buner}>
                  <div className={styles.BunerImg}>
                      <a href="">img aqui</a>
                  </div>
                  <div className={styles.BunerTexto}>
                      <p>Texto Aqui</p>
                  </div>
              </div>
          </div>
        </>

    );
}


export default Bunners;