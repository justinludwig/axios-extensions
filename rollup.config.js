/**
 * @author Kuitos
 * @since 2019-05-27
 */

import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import builtin from 'rollup-plugin-node-builtins';
import terser from '@rollup/plugin-terser';

function genConfig(minimize = false) {

	return {
		input: './esm/index.js',
		output: {
			name: 'axios-extensions',
			file: minimize ? './dist/axios-extensions.min.js' : './dist/axios-extensions.js',
			format: 'umd',
			globals: { axios: 'axios' },
			sourcemap: true,
		},
		external: ['axios'],
		plugins: [
			json(),
			nodeResolve(),
			commonjs(),
			builtin(),
			minimize ? terser() : void 0,
		],
	};
}

export default [
	genConfig(),
	genConfig(true),
]
