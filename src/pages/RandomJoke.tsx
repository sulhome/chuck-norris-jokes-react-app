import React from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getRandomJoke } from '../data/jokes-repository';
import DisplayJoke from '../components/DisplayJoke';

const RandomJoke = () => {
    const queryClient = useQueryClient();

    const { data: joke, refetch, isFetching } = useQuery({
        queryKey: ['randomJoke'],
        queryFn: getRandomJoke,
        enabled: false
    });

    const fetchRandomJoke = () => {
        refetch();
    };

    return (
        <>
            <h1>Random Joke</h1>
            <div className="text-center">
                <button
                    className="btn btn-success"
                    onClick={fetchRandomJoke}
                    disabled={isFetching}
                    data-testid="fetchRandomJokeBtn"
                >
                    {isFetching ? 'Loading...' : 'Fetch A Random Joke'}
                </button>
                {joke && <DisplayJoke joke={joke} />}
            </div>
        </>
    );
};

export default RandomJoke;
