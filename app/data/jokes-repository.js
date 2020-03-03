import {decode} from '../util/text-util';
import axios from 'axios';

const baseUrl = 'http://api.icndb.com/jokes/random';

export function getRandomJoke() {
    return axios.get(`${baseUrl}?exclude=%5Bexplicit%5D`)
        .then((res) => res.data)
        .then((data) => {
            return decode(data.value.joke);
        });
}

export function getCustomJoke(firstName, lastName) {
    return axios.get(`${baseUrl}?firstName=${firstName}&lastName=${lastName}&exclude=%5Bexplicit%5D`)
        .then((res) => res.data)
        .then((data) => {
            return decode(data.value.joke);
        });
}

export function getRandomJokes(numberOfJokes = 15) {
    return axios.get(`${baseUrl}/${numberOfJokes}?&exclude=%5Bexplicit%5D`)
        .then((res) => res.data)
        .then((data) => {
            return data.value
                .map(item => decode(item.joke));
        });
}

