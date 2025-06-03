import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import DisplayJoke from './DisplayJoke';

describe('DisplayJoke', () => {
    afterEach(cleanup);

    it('should display the joke text', () => {
        render(<DisplayJoke joke="test joke" />);
        expect(screen.getByTestId('jokeText')).toHaveTextContent('test joke');
    });

    it('should render nothing when joke is undefined', () => {
        const { container } = render(<DisplayJoke joke={undefined} />);
        expect(container.firstChild).toBeNull();
    });
});
