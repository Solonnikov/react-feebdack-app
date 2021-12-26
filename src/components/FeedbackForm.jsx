import PropTypes from "prop-types";
import Card from "./shared/Card"
import Button from "./shared/Button";
import {useState} from 'react';
import RatingSelect from "./RatingSelect";

function FeedbackForm({handleAdd}) {
    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');

    const handleTextChange = (e) => {
        if (text === '') {
            setMessage(null);
            setBtnDisabled(true);
        } else if (text !== '' && text.trim().length <= 10) {
            setMessage('Text must be at least 10 characters');
            setBtnDisabled(true);
        } else {
            setMessage(null);
            setBtnDisabled(false);
        }
        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating
            };

            handleAdd(newFeedback);
            setText('');
            console.log('newFeedback =>', newFeedback)
        }
    };

    return <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect select={(rating) => setRating(rating)}/>
            <div className="input-group">
                <input type="text" placeholder='Write a review' value={text} onChange={handleTextChange}/>
                <Button type='submit' isDisabled={btnDisabled}>Send</Button>
            </div>

            {message && <div className='message'>{message}</div>}
        </form>
    </Card>

}

FeedbackForm.defaultProps = {
    feedback: PropTypes.array.isRequired
};

export default FeedbackForm;
