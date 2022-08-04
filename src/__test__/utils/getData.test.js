import getData from '../../utils/getData';

describe('Fetch API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  test('Call API and return data', () => {
    const myData = '12345';
    const url = 'https://google.com';
    fetch.mockResponseOnce(JSON.stringify({ data: myData }));
    getData(url)
      .then((response) => {
        expect(response.data).toEqual(myData);
      });
    expect(fetch.mock.calls[0][0]).toEqual(url);
  });
});
