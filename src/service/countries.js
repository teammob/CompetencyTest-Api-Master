import axios from 'axios';
import AxiosError from '../errors/AxiosError';

export default async () => {
  try {
    const { data } = await axios.request({
      method: 'GET',
      url: 'https://restcountries.eu/rest/v1/region/Europe'
    });

    return JSON.stringify(data.map(x => x.name));
  } catch (err) {
    throw new AxiosError(err);
  }
};
