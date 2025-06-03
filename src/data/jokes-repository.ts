import { decode } from '../util/text-util';
import Joke from "../model/joke.interface";

const baseUrl = 'https://api.chucknorris.io/jokes';

function handleError(e: unknown): never {
    console.error('API Error:', e);
    throw e instanceof Error ? e : new Error('Unknown error occurred');
}

async function handleResponse<T>(res: Response): Promise<T> {
    if (!res.ok) {
        const message = await res.text();
        throw new Error(`Error ${res.status}: ${message || res.statusText}`);
    }
    return res.json();
}

export async function getRandomJoke(): Promise<string> {
    try {
        const res = await fetch(`${baseUrl}/random`);
        const data = await handleResponse<Joke>(res);
        return decode(data.value);
    } catch (e) {
        return handleError(e);
    }
}

export async function getRandomJokes(count = 15): Promise<string[]> {
    try {
        const results = await Promise.all(
            Array.from({ length: count }, async () => {
                const res = await fetch(`${baseUrl}/random`);
                const data = await handleResponse<Joke>(res);
                return decode(data.value);
            })
        );
        return results;
    } catch (e) {
        return handleError(e);
    }
}