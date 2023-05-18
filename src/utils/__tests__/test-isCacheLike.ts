/**
 * Created by Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2018/3/19 下午11:22
 */

import test from 'ava';
import isCacheLike from '../isCacheLike.js';

test('a object with specified method will be regard as cache', t => {

	let cache = {};
	t.is(isCacheLike(cache), false);

	cache = {

		// eslint-disable-next-line
		get() {
		},
		// eslint-disable-next-line
		set() {
		},
		// eslint-disable-next-line
		del() {
		},
	};
	t.is(isCacheLike(cache), true);
});
