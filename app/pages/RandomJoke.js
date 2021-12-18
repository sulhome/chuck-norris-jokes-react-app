import React, {useState} from 'react';
import {getRandomJoke} from '../data/jokes-repository';
import DisplayJoke from '../components/DisplayJoke';

export default () => {

    const [randomJoke, setRandomJoke] = useState(null);

    const fetchRandomJoke = async () => {

        let joke = await getRandomJoke();
        setRandomJoke(joke);

    };

    return (
        <React.Fragment>
            <h1>Random Joke</h1>
            <div className="text-center">
                <button className="btn btn-success"
                        onClick={fetchRandomJoke}
                        data-testid="fetchRandomJokeBtn">
                    Fetch A Random Joke
                </button>
                <DisplayJoke joke={randomJoke}/>
            </div>
        </React.Fragment>
    );
}
