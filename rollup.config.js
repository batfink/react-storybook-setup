import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import peerDeps from 'rollup-plugin-peer-deps-external'

export default {
    plugins: [
        peerDeps(),
        resolve({
            module: true,
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        babel({
            babelrc: false,
            presets: [
                '@babel/preset-env',
                '@babel/preset-react',
            ],
            plugins: [
                'styled-components',
                '@babel/plugin-proposal-object-rest-spread',
            ],
            exclude: 'node_modules/**',
        }),
        commonjs({
            include: 'node_modules/**',
        }),
    ],
    external: ['react', 'react-dom', 'prop-types', 'styled-components'],
    output: {
        format: 'cjs',
    },
}
