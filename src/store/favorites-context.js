import { createContext, useState } from 'react';

const FavoritesContext = createContext({
    userFavorites: [],
    userFavoritesTotal: 0,
    addToUserFavorites: (favoriteMeetup) => {},
    removeFromUserFavorites: (meetupId) => {},
    isInUserFavorites: (meetupId) => {}
})

export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);

    const context = {
        userFavorites: userFavorites,
        userFavoritesTotal: userFavorites.length,
        addToUserFavorites: addToUserFavoritesHandler,
        removeFromUserFavorites: removeFromUserFavoritesHandler,
        isInUserFavorites: isInUserFavoritesHandler
    }

    function addToUserFavoritesHandler(favoriteMeetup) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup);

        });
    }

    function removeFromUserFavoritesHandler(meetupId) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.filter(favoriteMeetup => favoriteMeetup.id !== meetupId);
        });
    }

    function isInUserFavoritesHandler(meetupId) {
        return userFavorites.some(favoriteMeetup => favoriteMeetup.id === meetupId);
    }

    return (
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContext;