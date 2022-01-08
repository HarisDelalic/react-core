import { useContext } from "react";
import classes from './MeetupItem.module.css';
import Card from "../ui/Card";
import FavoritesContext from "../../store/favorites-context";

function MeetupItem(props) {
    const favoritesCtx = useContext(FavoritesContext);

    const isItemInFavorites = favoritesCtx.isInUserFavorites(props.meetup.id);

    function onToggleFavoriteItem() {
        if (isItemInFavorites) {
            favoritesCtx.removeFromUserFavorites(props.meetup.id);
        } else {
            favoritesCtx.addToUserFavorites(props.meetup);
        }
    }

    return (<li key={props.meetup.id} className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.meetup.image} alt={props.meetup.id}/>
                </div>
                <div className={classes.content}>
                    <h3>{props.meetup.title}</h3>
                    <address>{props.meetup.address}</address>
                    <p>{props.meetup.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={onToggleFavoriteItem}>
                        {isItemInFavorites ? 'Remove From Favorites' : 'Add to Favorites'}
                    </button>
                </div>
            </Card>
        </li>
    )
}

export default MeetupItem;