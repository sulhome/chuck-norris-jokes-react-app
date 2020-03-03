import React from 'react';
import {decode} from './text-util';

describe('text util test', () => {

    it('should decode text', () => {
        const source = "this is a &quot;test&quot;";
        const result = decode(source);
        expect(result).toEqual('this is a "test"');
    });
});
