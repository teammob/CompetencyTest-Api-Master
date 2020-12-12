process.env.NODE_CONFIG_DIR = `${__dirname}/../config`;

const config = void 0;

const load = () => require('config').default; // eslint-disable-line global-require

export default config === void 0 ? load() : config;
