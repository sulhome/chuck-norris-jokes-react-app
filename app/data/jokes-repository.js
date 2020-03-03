import {decode} from '../util/text-util';

const baseUrl = 'http://api.icndb.com/jokes/random';

export function getRandomJoke() {
    return fetch(`${baseUrl}?exclude=%5Bexplicit%5D`)
        .then((res) => res.json())
        .then((data) => {
            return decode(data.value.joke);
        });
}

export function getCustomJoke(firstName, lastName) {
    return fetch(`${baseUrl}?firstName=${firstName}&lastName=${lastName}&exclude=%5Bexplicit%5D`)
        .then((res) => res.json())
        .then((data) => {
            return decode(data.value.joke);
        });
}

export function getRondomJokes(numberOfJokes = 15) {
    return fetch(`${baseUrl}/${numberOfJokes}?&exclude=%5Bexplicit%5D`)
        .then((res) => res.json())
        .then((data) => {
            return data.value
                .map(item => decode(item.joke));
        });

}

