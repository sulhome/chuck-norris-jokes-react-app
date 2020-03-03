import {getCustomJoke, getRandomJoke, getRandomJokes} from './jokes-repository';


describe('jokes', () => {

    it('should retrieve random joke', async () => {
        const result = await getRandomJoke();
        expect(result).not.toBeNull();
        expect(result.length > 5).toBeTruthy();
    });

    it('should retrieve custom joke', async () => {
        const result = await getCustomJoke('John', 'Smith');
        expect(result).not.toBeNull();
        expect(result.length > 5).toBeTruthy();
        expect(result).toContain('John Smith');
    });

    it('should retrieve batch of random jokes', async () => {
        const result = await getRandomJokes(3);
        expect(result).not.toBeNull();
        expect(result.length === 3).toBeTruthy();
    });
});
