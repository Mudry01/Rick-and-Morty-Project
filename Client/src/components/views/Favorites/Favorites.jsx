import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import Cards from "../../Cards/Cards";
import {
    orderCards,
    filterCards,
    resetFavorites
} from "../../../redux/actions";

import style from "./Favorites.module.css";

function Favorites({ myFavorites }) {
    const dispatch = useDispatch();

    function handleOrder(event) {
        dispatch(orderCards(event.target.value));
    }

    function handleFilter(event) {
        dispatch(filterCards(event.target.value));
    }

    function handleReset() {
        dispatch(resetFavorites());
    }

    return (
        <div className={style.container}>
            <select className={`${style.select} smooth-transition`} onChange={handleOrder} name="" id="">
                <option value="Ascendente">Ascendente</option>
                <option value="Descendiente">Descendiente</option>
            </select>
            <select className={style.select} onChange={handleFilter} name="" id="">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">Unknown</option>
            </select>
            <button className={style.boton} onClick={handleReset} >Reset Filter</button>
            <Cards characters={myFavorites} />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites,
    };
};

export default connect(mapStateToProps, null)(Favorites);