import { greet } from './greet';

describe('Testing Array and String: ', () => {
  it('should contain a name', () => {
    const returnVal = greet('Sayan');
    expect(returnVal).toContain('Sayan');
  });
});
