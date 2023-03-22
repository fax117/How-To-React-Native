import axios from 'axios';
import postRequest from '../../helpers/postRequest';

jest.mock('axios');

const urlToShort: string =
  'https://github.com/fax117/pokedex-clone/blob/main/pages/index.tsx';

describe('postRequest', () => {
  const mockResponse = {
    data: {
      _links: {
        short: 'https://short.url.com/api/alias/0',
        original: urlToShort,
      },
      alias: 'abcdef',
    },
  };

  it('Should return data if post request is successful', async () => {
    (axios.post as jest.Mock).mockResolvedValue(mockResponse);
    const response = await postRequest(urlToShort);
    expect(response.data).toEqual(mockResponse.data);
  });

  it('Should throw an error if post request fails', async () => {
    const mockError = new Error('Request failed');
    (axios.post as jest.Mock).mockRejectedValue(mockError);
    await expect(postRequest(urlToShort)).rejects.toThrow('Request failed');
  });

  it('Returns a string', async () => {
    (axios.post as jest.Mock).mockResolvedValue(mockResponse);
    const response = await postRequest(urlToShort);
    expect(typeof response.data._links.short).toBe('string');
  });

  it('Returns a different short URL for different long URLs', async () => {
    (axios.post as jest.Mock).mockResolvedValue(mockResponse);
    const result = await postRequest(urlToShort);
    expect(result.data._links.short).not.toBe(result.data._links.original);
  });
});
