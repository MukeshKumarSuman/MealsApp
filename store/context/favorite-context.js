import { createContext, useState } from "react";


export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {}
});

export default function FavoritesContextProvider({children}) {
    const [favoriteMealIds, setMavoriteMealIds] = useState([]);
    function addFavorite(id) {
        setMavoriteMealIds((currentFavId) => {
            if (favoriteMealIds.includes(id)) {
                return [...currentFavId];
            }
            return [...currentFavId, id];
        });
    }

    function removeFavorite(id) {
        setMavoriteMealIds((currentFavId) => currentFavId.filter((mealId) => mealId !== id));
    }

    const value = {
        ids: favoriteMealIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    };

    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}