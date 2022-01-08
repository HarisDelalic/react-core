import { useHistory } from 'react-router-dom';
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    const history = useHistory();

    function onAddNewMeetupHandler(meetup) {
        fetch('https://react-course-30acc-default-rtdb.europe-west1.firebasedatabase.app/meetups.json', {
            method: 'POST',
            body: JSON.stringify(meetup),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            history.replace('/');
        })
    }

    return <div>
        <NewMeetupForm onSubmit={onAddNewMeetupHandler}/>
    </div>
}

export default NewMeetupPage;