import SearchBar from "../SearchBar/SearchBar";
import styled from './navBar.module.css';
import { Link } from "react-router-dom";

export default function NavBar ({onSearch, random, onClick}) {
    return (
        <div className={styled.cuerpo}>
            <div className={styled.menu}>
                <Link to = {"/about"}>
                    <button className={styled.boton}>About</button>
                </Link>
                <Link to = {"/home"}>
                    <button className={styled.boton}>Home</button>
                </Link>
                <Link to = {"/favorites"}>
                    <button className={styled.boton}>Favorites</button>
                </Link>
            </div>
                <SearchBar onSearch={onSearch}></SearchBar>
                <button className={styled.boton} onClick={random}>
                    ADD RANDOM
                </button>
            <div>
                <Link>
                    <button onClick={onClick} className={styled.boton}>Log Out</button>
                </Link>
            </div>
        </div>

        
    )
}