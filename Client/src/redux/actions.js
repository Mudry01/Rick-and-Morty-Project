import axios from "axios";

export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const RESET = "RESET"

export const addFavorite = (character) => {
    return async (dispatch) => {
        try {
            const endpoint = "http://localhost:3001/rickandmorty/fav";
            const response = await axios.post(endpoint, character);

            dispatch({
                type: ADD_FAV,
                payload: response.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const removeFavorite = (id) => {
    try {
        const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
        return async (dispatch) => {
            const { data } = await axios.delete(endpoint);
            return dispatch({
                type: REMOVE_FAV,
                payload: data,
            });
        };
    } catch (error) {
        console.log(error);
    }
};

// export function removeFavorite(id) {
//     return {
//         type: REMOVE_FAV,
//         payload: id
//     };
// }

export function filterCards(gender) {
    return {
        type: FILTER,
        payload: gender
    }
}

export function orderCards(orden) {
    return {
        type: ORDER,
        payload: orden
    }
}

export function resetFavorites() {
    return {
        type: RESET
    };
}