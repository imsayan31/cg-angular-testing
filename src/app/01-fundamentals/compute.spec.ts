import { compute } from './compute';

describe('Testing number', () => {
  it('should return 0 if negative number provided', () => {
    const returnVal = compute(-1);
    expect(returnVal).toBe(0);
  });

  it('should increment the value if positive number provided', () => {
    const returnVal = compute(1);
    expect(returnVal).toBe(2);
  });
});
