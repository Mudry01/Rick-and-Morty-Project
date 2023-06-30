import styled from './SearchBar.module.css';
import { useState } from 'react';

export default function SearchBar(props) {

   const {onSearch} = props;

   const [id, setId] = useState("");

   function changeHandler(e) {
      e.preventDefault();
      let input = e.target.value;
      
      setId(input)
   }

   return (
      <div className={styled.divBar}>
         <input className={styled.entrada} type='search' value={id} onChange={changeHandler}/>
         <button className={styled.boton} onClick={()=>onSearch(id)}>Agregar</button>
      </div>
   );
}
