import {useContext} from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupsList from "../components/meetups/MeetupsList";


function FavoritesPage() {
    const favoritesCtx = useContext(FavoritesContext);

    return (<section>
        <MeetupsList meetups={favoritesCtx.userFavorites} />
    </section>
    )
}

export default FavoritesPage;