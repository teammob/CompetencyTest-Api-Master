import axios from 'axios';

jest.mock('axios');

describe('customer', () => {
  const requestData = {
    name: 'Yucel',
    age: 22,
    sex: 'Male',
    country: 'United Kingdom'
  };

  afterEach(() => {
    jest.dontMock('./customer');
  });

  it('should throw an exception if invalid payload is passed', async () => {
    let exception;
    const save = require('./customer').default;

    try {
      await save({});
    } catch (e) {
      exception = e;
    }

    expect(exception).toBeDefined();
  });

  it('should throw an exception if age is not provided', async () => {
    let exception;
    const save = require('./customer').default;

    try {
      await save({
        ...requestData,
        age: undefined
      });
    } catch (e) {
      exception = e;
    }

    expect(exception).toBeDefined();
  });

  it('should throw an exception if name is not provided', async () => {
    let exception;
    const save = require('./customer').default;

    try {
      await save({
        ...requestData,
        name: undefined
      });
    } catch (e) {
      exception = e;
    }

    expect(exception).toBeDefined();
  });

  it('should throw an exception if sex is not provided', async () => {
    let exception;
    const save = require('./customer').default;

    try {
      await save({
        ...requestData,
        sex: undefined
      });
    } catch (e) {
      exception = e;
    }

    expect(exception).toBeDefined();
  });

  it('should throw an exception if country is not provided', async () => {
    let exception;
    const save = require('./customer').default;

    try {
      await save({
        ...requestData,
        country: undefined
      });
    } catch (e) {
      exception = e;
    }

    expect(exception).toBeDefined();
  });
  it('should call save function', async () => {
    const saveSpy = jest.fn();

    jest.doMock('./customer', () => ({
      __esModule: true,
      default: saveSpy
    }));
    const save = require('./customer').default;
    await save(requestData);
    expect(saveSpy.mock.calls[0][0]).toEqual(requestData);
  });

  it('should return name field from backend', async () => {
    axios.request.mockImplementationOnce(() =>
      Promise.resolve({
        data: { name: 'Yucel' }
      })
    );
    const save = require('./customer').default;
    const data = await save(requestData);
    expect(data).toEqual({ name: 'Yucel' });
    expect(axios.request).toHaveBeenCalledTimes(1);
  });
});
