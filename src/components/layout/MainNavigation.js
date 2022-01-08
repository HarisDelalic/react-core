import { Link } from "react-router-dom";
import { useContext } from "react";

import classes from './MainNavigation.module.css'
import FavoritesContext from "../../store/favorites-context";

function MainNavigation() {
    const favoritesCtx = useContext(FavoritesContext);

    return <header className={classes.header}>
        <div className={classes.logo}>React Meetups</div>
        <ul>
            <li>
                <Link to='/'>All Meetups</Link>
            </li>
            <li>
                <Link to='/favorites'>Favorites <span className={classes.badge}>{favoritesCtx.userFavoritesTotal}</span></Link>
            </li>
            <li>
                <Link to='/new-meetup'>New Meetup</Link>
            </li>
        </ul>

    </header>
}

export default MainNavigation;