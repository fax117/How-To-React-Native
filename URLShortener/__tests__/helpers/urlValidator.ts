import urlValidator from '../../helpers/urlValidator';

const testCases = [
  {url: 'http://www.example.com', expected: true},
  {url: 'https://www.example.com', expected: true},
  {url: 'ftp://www.example.com', expected: true},
  {url: 'http://example.com', expected: true},
  {url: 'http://www.example.com/path', expected: true},
  {url: 'http://www.example.com/path?query=string', expected: true},
  {url: 'http://localhost', expected: false},
  {url: 'http://127.0.0.1', expected: true},
  {url: 'not a url', expected: false},
  {url: 'www.example.com', expected: true},
  {url: 'example.com', expected: true},
  {url: 'http:/www.example.com', expected: false},
  {url: 'http://www.example..com', expected: false},
  {url: 'http://www.example.com:', expected: false},
  {url: 'http://www.example.com:80abc', expected: false},
];

testCases.forEach(testCase => {
  test(`URL validation test for ${testCase.url}`, () => {
    expect(urlValidator(testCase.url)).toBe(testCase.expected);
  });
});
