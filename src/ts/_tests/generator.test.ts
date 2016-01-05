'use strict';

import {generateRandom, NameItem} from '../generator';

describe('Generator test', function () {
    it('Should be Array', function () {
        let result: Array<NameItem> = generateRandom(5);

        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBe(5);
    });
});
