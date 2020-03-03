import React, {useReducer} from 'react';
import TextInput from '../components/TextInput';
import {getCustomJoke} from '../data/jokes-repository';
import DisplayJoke from '../components/DisplayJoke';

export default () => {
    const initialState = {errorMessage: '', firstName: '', lastName: '', inputText: '', joke: ''};
    const fetchJoke = async (e) => {
        e.preventDefault();
        let joke = await getCustomJoke(state.firstName, state.lastName);
        dispatch({type: 'jokeFetched', joke});
    };

    function reducer(state, action) {
        switch (action.type) {
            case 'inputInvalid':
                return {
                    ...state,
                    errorMessage: 'Please enter 2 words one for first name and the other one for last name',
                    inputText: action.inputText
                };
            case 'inputValid':
                return {
                    ...state,
                    errorMessage: '',
                    firstName: action.firstName,
                    lastName: action.lastName,
                    inputText: action.inputText
                };
            case 'jokeFetched':
                return {
                    ...state,
                    joke: action.joke
                };
            default:
                throw new Error();
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const validateInput = (input) => {
        const words = input.trim().split(' ');
        if (words.length === 2) {
            return dispatch({
                type: 'inputValid',
                inputText: input,
                firstName: words[0],
                lastName: words[1]
            });
        }

        return dispatch({type: 'inputInvalid', inputText: input});

    };

    const isFormValid = () => {
        return state.errorMessage.length === 0
            && state.firstName.length > 0
            && state.lastName.length > 0;
    };

    return (
        <React.Fragment>
            <h1>Search Joke</h1>
            <form onSubmit={fetchJoke}>
                <TextInput label="First and Last Name"
                           placeholder="First and Last Name"
                           errorMessage={state.errorMessage}
                           handleChange={validateInput}
                           value={state.inputText}
                />
                <button type="submit"
                        className={`btn btn-success ${!isFormValid() ? 'disabled' : ''}`}
                        disabled={!isFormValid()}
                data-testid="submitSearchJoke">Get my custom Joke!
                </button>
            </form>
            <DisplayJoke joke={state.joke}/>
        </React.Fragment>
    );
}
