import classes from './MeetupsList.module.css';
import MeetupItem from "./MeetupItem";

function MeetupsList(props) {
    return (<ul className={classes.list}>
        {props.meetups.map((meetup) => {
            return <MeetupItem key={meetup.id} meetup={meetup}/>;
        })};
    </ul>)
}

export default MeetupsList;