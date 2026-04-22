const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RtlCssPlugin = require('rtlcss-webpack-plugin');

const LOCAL_JS = path.join(__dirname, 'inc/assets/js');
const LOCAL_SCSS = path.join(__dirname, 'inc/assets/scss');
const BUILD_DIR = path.join(__dirname, 'inc/assets/dist');

module.exports = {
    entry: {
        app: [`${LOCAL_JS}/main.js`],
        style: [`${LOCAL_SCSS}/style.scss`],
        style_rtl: [`${LOCAL_SCSS}/style_rtl.scss`],
        style_demo2: [`${LOCAL_SCSS}/style_demo2.scss`],
        style_demo2_rtl: [`${LOCAL_SCSS}/style_demo2_rtl.scss`],
        style_demo3: [`${LOCAL_SCSS}/style_demo3.scss`],
        style_demo3_rtl: [`${LOCAL_SCSS}/style_demo3_rtl.scss`],
        style_demo4: [`${LOCAL_SCSS}/style_demo4.scss`],
        style_demo4_rtl: [`${LOCAL_SCSS}/style_demo4_rtl.scss`],
        style_demo5: [`${LOCAL_SCSS}/style_demo5.scss`],
        style_demo5_rtl: [`${LOCAL_SCSS}/style_demo5_rtl.scss`],
        style_demo6: [`${LOCAL_SCSS}/style_demo6.scss`],
        style_demo6_rtl: [`${LOCAL_SCSS}/style_demo6_rtl.scss`],
        style_demo7: [`${LOCAL_SCSS}/style_demo7.scss`],
        style_demo7_rtl: [`${LOCAL_SCSS}/style_demo7_rtl.scss`],
        style_demo8: [`${LOCAL_SCSS}/style_demo8.scss`],
        style_demo8_rtl: [`${LOCAL_SCSS}/style_demo8_rtl.scss`],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(scss|css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
            },
        ],
    },
    watch: true,
    mode: 'development',
    resolve: {
        extensions: ['.js', '.css', '.scss'],
    },
    output: {
        path: BUILD_DIR,
        filename: '[name].js',
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new RtlCssPlugin({
            filename: '[name]-rtl.css',
        }),
    ],
};
