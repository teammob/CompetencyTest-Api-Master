import mockAxios from 'axios';

jest.mock('axios');

describe('countries', () => {
  it.only('should return country names', async () => {
    mockAxios.request.mockImplementationOnce(() =>
      Promise.resolve({
        data: [{ name: 'UK' }, { name: 'AB' }]
      })
    );

    const countries = require('./countries').default;
    const response = await countries();

    expect(response).toEqual(JSON.stringify(['UK', 'AB']));
    expect(mockAxios.request).toHaveBeenCalledTimes(1);
    expect(mockAxios.request).toHaveBeenCalledWith({
      method: 'GET',
      url: 'https://restcountries.eu/rest/v1/region/Europe'
    });
  });
});
