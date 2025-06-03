import React from 'react';
import { render, fireEvent, cleanup, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import RandomJoke from './RandomJoke';
import { getRandomJoke } from '../data/jokes-repository';
import * as jokeRepo from '../data/jokes-repository';

jest.mock('../data/jokes-repository', () => ({
    getRandomJoke: jest.fn(),
}));

describe('Random Joke page', () => {
    afterEach(cleanup);

    const createTestQueryClient = () =>
        new QueryClient({
            defaultOptions: {
                queries: {
                    retry: false,
                },
            },
        });

    it('should display joke', async () => {
        (jokeRepo.getRandomJoke as jest.Mock).mockResolvedValue('test joke');

        const queryClient = createTestQueryClient();

        const { getByTestId } = render(
            <QueryClientProvider client={queryClient}>
                <RandomJoke />
            </QueryClientProvider>
        );

        fireEvent.click(getByTestId('fetchRandomJokeBtn'));

        const joke = await waitFor(() => getByTestId('jokeText'));
        expect(joke).toHaveTextContent('test joke');
        expect(getRandomJoke).toHaveBeenCalledTimes(1);
    });
});
