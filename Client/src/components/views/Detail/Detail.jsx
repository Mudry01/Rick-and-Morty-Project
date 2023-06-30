import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import styled from "./Detail.module.css";

function Detail () {
    const {id} = useParams();

    const [character, setCharacter] = useState([])

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

     return (
      <div className={styled.container}>
        <h1 className={styled.title}>DETALLES</h1>
        <div className={styled.content}>
          <div className={styled.leftcolumn}>
            <img className={styled.characterImage} src={character.image} alt={character.name} />
            <h1 className={styled.characterName}>{character.name}</h1>
            <h2 className={styled.characterStatus}>Status: {character.status}</h2>
          </div>
          <div className={styled.rightcolumn}>
            <div className={styled.characterDetails}>
              <h3>Species:</h3>
              <p>{character.species}</p>
            </div>
            <div className={styled.characterDetails}>
              <h3>Gender:</h3>
              <p>{character.gender}</p>
            </div>
            <div className={styled.characterDetails}>
              <h3>Origin:</h3>
              <p>{character.origin?.name}</p>
            </div>
            <div className={styled.characterDetails}>
              <h3>Location:</h3>
              <p>{character.location?.name}</p>
            </div>
          </div>
        </div>
      </div>
    );
    
};

export default Detail;