import styles from "./Comentarios.module.css"


function Comentarios(){

    return(

        <>
        <div className={styles.container}>
            <div>
                <input 
                    placeholder="Comentários"
                    className={styles.Comentarios}
                />
            </div>
        </div>

        </>
    );
}

export default Comentarios;
