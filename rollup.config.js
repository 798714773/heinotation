import vuePlugin from 'rollup-plugin-vue'
import esbuild from 'rollup-plugin-esbuild'
import resolve from 'rollup-plugin-node-resolve'
// import { terser } from "rollup-plugin-terser" //压缩

export default {
    input: ['src/lib/index.ts'],
    output: [
        {
            // globals: {
            //     vue: 'Vue'
            // },
            file: 'lib/index.ts',
            format: 'es',
            name: 'heinotation',
            // plugins: [terser()]
        }, {
            file: 'es/index.ts',
            format: 'es',
            name: 'heinotation',
            // plugins: [terser()]
        }
    ],
    plugins: [
        // ts()
        esbuild({
            include: /\.[jt]s$/,
            // minify: process.env.NODE_ENV === 'production',
            target: 'esnext'
        }),
        vuePlugin(),
        resolve()
    ]
}

// rollup -c -w
// format: 'iife', //五种输出格式：amd, cjs, es, iife 和 umd
// name: 'raphael', //// 打包后的全局变量，如浏览器端 window.raphael
// sourcemap: true

// vue({
//     include: /\.vue$/,
// })