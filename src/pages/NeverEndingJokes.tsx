import React from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getRandomJokes } from '../data/jokes-repository';
import DisplayJoke from '../components/DisplayJoke';
import { useScrollToBottom } from '../hooks/useScrollToBottom';

const PAGE_SIZE = 15;

const NeverEndingJokes: React.FC = () => {
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
    } = useInfiniteQuery({
        queryKey: ['jokes'],
        queryFn: ({pageParam = 0}) => getRandomJokes(PAGE_SIZE),
        getNextPageParam: (_lastPage, pages) => pages.length,
        initialPageParam: 0
    });

    useScrollToBottom(() => {
        if (!isFetchingNextPage && hasNextPage) {
            fetchNextPage();
        }
    });

    const allJokes = data?.pages.flat() ?? [];

    return (
        <div id="list">
            <h1>Infinite Jokes</h1>
            {allJokes.map((joke, index) => (
                <DisplayJoke key={index} joke={joke} />
            ))}
            {isFetchingNextPage && <p className="text-muted">Loading more jokes...</p>}
        </div>
    );
};

export default NeverEndingJokes;
