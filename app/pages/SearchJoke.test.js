import SearchJoke from './SearchJoke';

jest.mock('../data/jokes-repository');
import React from 'react';
import {render, fireEvent, cleanup, waitForElement} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {getRandomJoke} from '../data/jokes-repository';

describe('Random Joke page', () => {

    afterEach(cleanup);

    it('should display joke', async () => {
        getRandomJoke.mockImplementation(() => {
            return Promise.resolve('test joke');
        });
        const {getByTestId} = render(<SearchJoke/>);
        fireEvent.click(getByTestId('fetchRandomJokeBtn'));
        const joke = await waitForElement(() => getByTestId('jokeText'));
        expect(joke).toHaveTextContent('test joke');
        expect(getRandomJoke).toHaveBeenCalledTimes(1);
    });
});
