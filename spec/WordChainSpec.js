const WordChain = require('../src/WordChain');
require('jasmine-co').install();

describe('WordChain', () => {
  let dictionary = null;
  beforeEach(() => {
    // this.prueba = WordChain;
    dictionary = ['cat', 'cot', 'dot', 'dog'];
  });
  it('confirms that cat and dog have a difference-count of three', () => {
    const differences = WordChain.countDifferences('cat', 'dog');
    expect(differences).toBe(3);
  });

  it('confirms that cog and dog have a difference-count of one', () => {
    const differences = WordChain.countDifferences('cog', 'dog');
    expect(differences).toBe(1);
  });

  it('returns the initial list of candidates as cat, cot and dot', () => {
    const wordlist = WordChain.removeWordsWithMoreThanOneDifferenceFromTheStartWord('cat', dictionary);
    expect(wordlist).not.toContain('cat');
    expect(wordlist).toContain('cot');
    expect(wordlist).not.toContain('dot');
    expect(wordlist).not.toContain('dog');
  });

  it('filters out any words that were have already been used in our path from the start word to the target word', () => {
    let wordlist = ['dot', 'cot', 'pot'];
    const predecessors = ['dot', 'cot'];
    wordlist = WordChain.removeWordsThatHaveAlreadyBeenSeen(wordlist, predecessors);
    expect(wordlist).toContain('pot');
    expect(wordlist).not.toContain('cot');
    expect(wordlist).not.toContain('dot');
  });


  it('removes any duplicated words in the list', () => {
    const wordlist = ['dot', 'dot', 'pot'];
    const deduplicatedList = WordChain.deduplicate(wordlist);
    expect(deduplicatedList).toContain('dot');
    expect(deduplicatedList).toContain('pot');
    expect(deduplicatedList.length).toBe(2);
  });


  it('sorts the wordlist according to the number of differences between each word and the target word', () => {
    const wordlist = ['cat', 'cog', 'cot'];
    const targetWord = 'dog';

    const sortedList = WordChain.sortByNumberOfDifferences(wordlist, targetWord);
    expect(sortedList[0]).toBe('cog');
    expect(sortedList[1]).toBe('cot');
    expect(sortedList[2]).toBe('cat');
  });

  it('should throw an error if the start word is not in the dictionary', () => {
    // const dictionary = ['cat', 'cog', 'cot'];
    // const self = this;
    expect(() => { WordChain.findWordChain('rubbish', 'cat', dictionary); }).toThrow(new Error('rubbish is not listed in the dictionary!'));
  });

  it('should throw an error if the target word is not in the dictionary', () => {
    dictionary = ['cat', 'cog', 'cot'];
    // const self = this;
    expect(() => { WordChain.findWordChain('cat', 'rubbish', dictionary); }).toThrow(new Error('rubbish is not listed in the dictionary!'));
  });

  it('returns the path from cat to dog', () => {
    dictionary = WordChain.loadDictionary();
    WordChain.findWordChain('cat', 'dog', dictionary);
  });

  it('returns the path from frog to leap', () => {
    dictionary = WordChain.loadDictionary();
    WordChain.findWordChain('frog', 'leap', dictionary);
  });

  it('returns the path from code to kata', () => {
    dictionary = WordChain.loadDictionary();
    WordChain.findWordChain('code', 'kata', dictionary);
  });
});
