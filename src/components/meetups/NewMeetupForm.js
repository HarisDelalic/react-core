import { useRef } from "react";

import Card from "../ui/Card";
import classes from './NewMeetupForm.module.css';

function NewMeetupForm(props) {
    const titleRef = useRef()
    const imageRef = useRef()
    const addressRef = useRef()
    const descriptionRef = useRef()

    function onSubmitHandler(event) {
        event.preventDefault();

        const title = titleRef.current.value;
        const image = imageRef.current.value;
        const address = addressRef.current.value;
        const description = descriptionRef.current.value;

        const meetup = {
            title: title,
            image: image,
            address: address,
            description: description
        }

        props.onSubmit(meetup);

        // console.log('form submitted, meetup: ', meetup);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={onSubmitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Title</label>
                    <input type='text' required id='title' ref={titleRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Image</label>
                    <input type='url' required id='image' ref={imageRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>Address</label>
                    <input type='text' required id='address' ref={addressRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea required id='description' rows='5' ref={descriptionRef}/>
                </div>
                <div className={classes.actions}>
                    <button>Add New Meetup</button>
                </div>
            </form>
        </Card>
    )

}

export default NewMeetupForm;