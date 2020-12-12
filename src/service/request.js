import axios from 'axios';
import AxiosError from '../errors/AxiosError';

export default async (url, method, body) => {
  const bodyParams = method === 'GET' ? { params: body } : { data: body };

  try {
    const { data: d, headers: h } = await axios.request({
      method,
      url,
      ...bodyParams
    });

    return [d, h];
  } catch (err) {
    /*eslint-disable*/
     console.log('service request error',err,method, url.toString(), bodyParams)
    throw new AxiosError(err);
  }
};
