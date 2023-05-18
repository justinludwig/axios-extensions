/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2017-09-28
 */

import { LRUCache as Cache } from 'lru-cache';
import cacheAdapterEnhancer from './cacheAdapterEnhancer.js';
import retryAdapterEnhancer from './retryAdapterEnhancer.js';
import throttleAdapterEnhancer from './throttleAdapterEnhancer.js';
import { ICacheLike } from './utils/isCacheLike.js';

export {
	Cache,
	ICacheLike,
	cacheAdapterEnhancer,
	throttleAdapterEnhancer,
	retryAdapterEnhancer,
};
