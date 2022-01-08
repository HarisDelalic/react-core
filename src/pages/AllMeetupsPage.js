import MeetupsList from "../components/meetups/MeetupsList";
import { useState, useEffect } from "react";

function AllMeetupsPage() {
    const [isLoading, setLoading] = useState(true);
    const [meetups, setMeetups] = useState([]);

    useEffect(() => {
        fetch('https://react-course-30acc-default-rtdb.europe-west1.firebasedatabase.app/meetups.json')
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then((data) => {
                const meetups = [];

                for(const key in data) {
                    const meetup = {id: key, ...data[key] }
                    meetups.push(meetup);
                }
                console.log('data: ', data);
                setLoading(false);
                setMeetups(meetups);
            });
    }, [])

    if(isLoading) {
        return <section>
            <h1>All Meetups</h1>
            Loading...
        </section>
    } else {
        return <section>
            <h1>All Meetups</h1>
            <MeetupsList meetups={meetups} />
        </section>
    }
    // <div className='header'>AllMeetupsPage</div>
}

export default AllMeetupsPage;