import { createAPI } from '../util';
import config from '../config';

const baseUrl = {
  mock: 'https://www.easy-mock.com/mock/5badddbdf5f80f6dcfa24fd1/compass',
  dev: '',
  pre: '',
  prod: ''
}[config.env || 'mock'];

export default createAPI(baseUrl);
