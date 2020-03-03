import SearchJoke from './SearchJoke';
import React from 'react';
import {cleanup, fireEvent, render, waitForElement} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {getCustomJoke} from '../data/jokes-repository';
import {wait} from '@testing-library/dom';

jest.mock('../data/jokes-repository');

describe('Search Joke page', () => {

    afterEach(cleanup);

    it('Should show error if input is invalid', async () => {
        const {getByTestId} = render(<SearchJoke/>);

        const searchJokeInput = getByTestId('searchJokeInput');
        fireEvent.change(searchJokeInput, {target: {value: 'test'}});

        await wait(() => {
            let joke = getByTestId('inputErrorMessage');
            expect(joke).toHaveTextContent('Please enter 2 words one for first name and the other one for last name');
            expect(getByTestId('submitSearchJoke')).toBeDisabled();
        });
    });

    it('Should retrieve search joke', async () => {
        getCustomJoke.mockImplementation(() => {
            return Promise.resolve('John Smith search joke');
        });
        const {getByTestId} = render(<SearchJoke/>);

        const searchJokeInput = getByTestId('searchJokeInput');
        fireEvent.change(searchJokeInput, {target: {value: 'John Smith'}});
        fireEvent.click(getByTestId('submitSearchJoke'));
        const joke = await waitForElement(() => getByTestId('jokeText'));
        expect(joke).toHaveTextContent('John Smith search joke');
        expect(getCustomJoke).toHaveBeenCalledTimes(1);
    });
});
