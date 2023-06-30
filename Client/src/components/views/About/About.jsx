import styles from "./About.module.css"

function About () {
    return (
        <div className={styles.container}>
      <div className={styles.image}>
    <img className={styles.forimage} src={require('../../../assets/IMG-20200426-WA0008(2).jpeg')} alt="IMAGEN" />
    <div className={styles.text}>
            <h1 className={styles.heading1}>SEBASTIÁN MUDRY</h1>
            <h2 className={styles.heading2}>Programador Web Full-Stack Junior</h2>
        </div>
        </div>
      <div>
        <h2 className={styles.heading2}>Sobre Mí</h2>
        <p className={styles.paragraph}>
          Muy Buenas, soy <span className={styles.highlight}>Sebastián Mudry</span>, me presento soy desarrollador web full-stack junior, estudié en una técnica secundaria orientada a maestro mayor de obras y hice un curso sobre programación full-stack de una duración de 9 meses.
        </p>
        <div className={styles.container1}>
          <div>
            <h3 className={styles.heading3}>Datos Personales</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <strong className={styles.bold}>Fecha de Nacimiento: </strong>
                11-11-2001
              </li>
              <li className={styles.listItem}>
                <strong className={styles.bold}>Teléfono: </strong>
                11-11-2001
              </li>
              <li className={styles.listItem}>
                <strong className={styles.bold}>Email: </strong>
                sebastiandiego_01@hotmail.com
              </li>
              <li className={styles.listItem}>
                <strong className={styles.bold}>Dirección: </strong>
                Argentina, Buenos Aires
              </li>
              <li className={styles.listItem}>
                <strong className={styles.bold}>Cargo: </strong>
                <span className={styles.jobTitle}> LIBRE</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;