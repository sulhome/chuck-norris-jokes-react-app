import React, {useEffect} from 'react';
import {getRondomJokes} from '../data/jokes-repository';
import DisplayJoke from '../components/DisplayJoke';

export default () => {

    const [items, setItems] = React.useState([]);
    const [loadMore, setLoadMore] = React.useState(true);

    const windowScrollEventHandler = () => {
        const listElement = document.getElementById('list');
        if (window.scrollY + window.innerHeight >= listElement.clientHeight + listElement.offsetTop) {
            setLoadMore(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', windowScrollEventHandler);
        return () => window.removeEventListener('scroll', windowScrollEventHandler);
    }, []);

    useEffect(() => {
        if (loadMore) {
            getRondomJokes()
                .then(jokes => {
                    setItems(items.concat(jokes));
                    setLoadMore(false);
                });
        }
    }, [loadMore]);


    return (
        <div id="list">
            <h1>Infinite Jokes</h1>


            {items.map((joke, index) => (
                <DisplayJoke joke={joke} key={index}/>
            ))}

        </div>
    );
}

