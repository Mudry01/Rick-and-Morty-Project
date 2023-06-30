import { useState } from 'react';
import { connect } from 'react-redux';
import { addFavorite, removeFavorite } from '../../redux/actions';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from '../Card/Card.module.css';

function Card(props) {
   const { character, onClose, addFavorite, removeFavorite, myFavorites } = props;
   const { image, name, species, gender, id } = character;

   const [isFav, setIsFav] = useState(false);

   useEffect(() => {
      if (myFavorites) {
         myFavorites.forEach((fav) => {
            if (fav.id === id) {
               setIsFav(true);
            }
         });
      }
   }, [myFavorites, id]);

   

   function handleFavorite(character) {
      if (!isFav) {
         addFavorite(character);
         setIsFav(true);
      } else {
         removeFavorite(character);
         setIsFav(false);
      }
   }

   return (
      <div className={styles.divCard}>
  {useLocation().pathname === '/home' && (
    <button className={`${styles.boton} ${styles.botonX}`} onClick={() => { onClose(character.id) }}>X</button>
  )}
  {isFav ? (
    <button className={`${styles.boton} ${styles.botonFav} ${styles.botonFavLeft}`} onClick={() => handleFavorite(character.id)}>❤️</button>
  ) : (
    <button className={`${styles.boton} ${styles.botonFav} ${styles.botonFavLeft}`} onClick={() => handleFavorite(character)} >🤍</button>
  )}
  <h2 className={styles.nombres}>Name: {name}</h2>
  {/* <h2>Status:{character.status}</h2> */}
  {/* <h2>Origin:{character.origin.name}</h2> */}
  <Link to={`/detail/${id}`}>
    <img
      className={styles.imagenes}
      src={image}
      alt={name}
    />
  </Link>
  <h2 className={styles.datos}>Species: {species}</h2>
  <h2 className={styles.datos}>Gender: {gender}</h2>
</div>

   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFavorite: (character) => dispatch(addFavorite(character)),
      removeFavorite: (id) => dispatch(removeFavorite(id))
   }
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(Card);