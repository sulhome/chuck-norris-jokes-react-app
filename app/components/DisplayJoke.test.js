import React from 'react';
import {render, cleanup} from '@testing-library/react';
import DisplayJoke from './DisplayJoke';
import {getByTestId} from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';

describe('Display Joke test', () => {

    afterEach(cleanup);

    it('should display joke', () => {
        const {getByTestId} = render(<DisplayJoke joke="test joke"/>);
        expect(getByTestId('jokeText')).toHaveTextContent("test joke");
    });
});
