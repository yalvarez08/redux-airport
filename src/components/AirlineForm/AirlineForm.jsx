import {useDispatch} from 'react-redux';
import {useState} from 'react';

function AirlineForm() {

    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();
    
        dispatch({
            type: "AIRLINELIST_ADD",
            // Pass in airline name, that's tracked in the useState variable
            payload: nameInput
        });
    
        setNameInput('');
      }

    const [nameInput, setNameInput] = useState('');

    return (

        <form onSubmit={handleSubmit}>
          <input value={nameInput} onChange={event => setNameInput(event.target.value)} placeholder='Airline Name' />
          <button type="submit">Add Airline</button>
        </form>
    )
}

export default AirlineForm