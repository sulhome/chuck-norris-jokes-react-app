import he from 'he';

export function decode(encoded: string): string {
    return he.decode(encoded);
}
