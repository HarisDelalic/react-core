import {Route, Switch} from 'react-router-dom';

import './App.css';
import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavoritesPage from "./pages/FavoritesPage";
import NewMeetupPage from "./pages/NewMeetupPage";
import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";

function App() {
    return (
        <Layout>
            <Switch>
                <Route path='/' exact>
                    <AllMeetupsPage/>
                </Route>
                <Route path='/favorites'>
                    <FavoritesPage/>
                </Route>
                <Route path='/new-meetup'>
                    <NewMeetupPage/>
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
