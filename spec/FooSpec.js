
const Foo = require('../src/Foo');
require('jasmine-co').install();

describe('Foo class', () => {
  describe('when greeting with Carlos', () => {
    let greeting = null;
    beforeEach(() => {
      greeting = Foo.greet('Carlos');
    });
    it('then the greeting message is correct', () => {
      expect(greeting).toBe('Hellos Carlos');
    });
  });
  describe('when greeting with null', () => {
    let greeting = null;
    beforeEach(() => {
      greeting = Foo.greet(null);
    });
    it('then the greeting message is correct', () => {
      expect(greeting).toBe('Hellos Stranger');
    });
  });
});
