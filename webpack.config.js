const webpack = require('webpack');
module.exports = {
    entry: ["./src/client/index.tsx",
    'react-hot-loader/patch',
    'webpack/hot/only-dev-server'
    ],
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally
    
        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates
    
        new webpack.NoEmitOnErrorsPlugin(),
        // do not emit compiled assets that include errors
    ],

    mode:'development',

    devServer: {
        contentBase: './src/client',
        port: 9000,
        host:'localhost',
        headers: {
                'Access-Control-Allow-Origin': '*'
        },
        proxy: {
            "/api": "http://localhost:5000",
            changeOrigin:true,
        }
    }
};
