import {getRandomJoke, getRandomJokes} from './jokes-repository';


describe('jokes', () => {

    it('should retrieve random joke', async () => {
        const result = await getRandomJoke();
        expect(result).not.toBeNull();
    });

    it('should retrieve batch of random jokes', async () => {
        const result = await getRandomJokes(3);
        expect(result).not.toBeNull();
        expect(result.length === 3).toBeTruthy();
    });
});
