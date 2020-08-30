const path = require('path')
    , {CleanWebpackPlugin} = require('clean-webpack-plugin')
    , HTMLWebpackPlugin = require('html-webpack-plugin')
    , CopyPlugin = require('copy-webpack-plugin')
    , MiniCssExtractPlugin = require('mini-css-extract-plugin')

    , isProd = process.env.NODE_ENV === 'production'
    , isDev = !isProd

    , filename = (ext) => isDev ? `bundle.${ext}` : `bundle.[hash].${ext}`

    , jsLoaders = () => {
        const loaders = [
            {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                },
            },
        ];
        if (isDev) loaders.push('eslint-loader')

        return loaders
      }
;

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: ['@babel/polyfill', './index.js'],
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@core': path.resolve(__dirname, 'src/core'),
        },
    },
    devtool: isDev ? 'source-map' : false,
    devServer: {
        port: 3000,
        hot: isDev,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin( {
            template: 'index.html',
            minify: {
                removeComments: isProd,
                collapseWhitespace: isProd,
            },
        } ),
        new CopyPlugin( {
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/favicon.ico'),
                    to: path.resolve(__dirname, 'dist'),
                }
            ],
        } ),
        new MiniCssExtractPlugin( {
            filename: filename('css'),
        } ),
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: isDev,
                            reloadAll: true,
                        },
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: jsLoaders(),
            },
        ],
    },
};
