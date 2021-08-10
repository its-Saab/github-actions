const assert = require('assert')

describe('Simple Tests', () => {
  it('should return 2', () => {
         assert.strictEqual(1 + 1, 2);
     });
  it('should return 9', () => {
         assert.strictEqual(3 * 3, 9);
     });
  it('should return 1', () => {
         assert.strictEqual(6 / 6, 1);
     });
 });
