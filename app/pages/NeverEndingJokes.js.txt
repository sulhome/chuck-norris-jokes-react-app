import React, {useEffect} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import {getRandomJokes} from '../data/jokes-repository';
import DisplayJoke from '../components/DisplayJoke';

const style = {
    height: 30,
    border: '1px solid green',
    margin: 6,
    padding: 8
};

export default () => {

    const [items, setItems] = React.useState([]);

    useEffect(() => {

        async function loadJokes() {
            const jokes = await getRondomJokes();
            setItems(jokes);
        }

        loadJokes();
    }, []);

    const fetchMoreData = async () => {
        const jokes = await getRandomJokes();
        setItems(items.concat(jokes));
    };

    return (
        <div className="mb-5">
            <h1>Infinite Jokes</h1>

            <InfiniteScroll
                dataLength={items.length}
                next={fetchMoreData}
                hasMore={true}
                loader={<h4>Loading...</h4>}>
                {items.map((joke, index) => (
                    <DisplayJoke joke={joke} key={index}/>
                ))}
            </InfiniteScroll>
        </div>
    );
}

