// Include modules in config file
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebPackPlugin = require('html-webpack-plugin');
var CleanWebPackPlugin = require('clean-webpack-plugin');
/*var extractPlugin = new ExtractTextPlugin({
   /!* path: path.resolve(__dirname,'builds/development/css'),*!/
    filename: 'zoopckit.css',
   /!* template: 'builds/development/css/zoopckit.css'*!/
});*/


module.exports = {

    // Entry Simple for entry point for zoopckit app
    entry: './src/Zoopckit/Illuminate/Config/main.js',

    // Output for zoopckit bundle file
    output: {

        // used by path module for path address
        path: path.resolve(__dirname, './builds/development'),

        // File name to bundle and export this is for Example : Zoopckit.js , You can tell any name !
        filename: 'zoopckit.js',

        publicPath: 'development/js'

    },
    module: {
        rules: [
            {
            test: /\.js$/,
            use: [
                {
                    loader: 'babel-loader',
                    options: {  presets: ['es2015']     }
                }
                 ]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                use: ['css-loader', 'sass-loader']
                })// End use extractPlugin
            },
            {
                test:/\.html$/,
                use:['html-loader']
            },
            {

                test:/\.(ttf|woff|eot|woff2)$/,
                use:'file-loader?name=[name].[ext]&publicPath=../&outputPath=fonts/persian/',

            }

              ]

    }//End Module system
    ,
    plugins: [
        new ExtractTextPlugin('css/zoopckit.css'),
        /*extractPlugin,*/
        new HtmlWebPackPlugin({
            template: 'builds/development/index.html'
        }),
        new CleanWebPackPlugin(['builds/developments'])
    ]

};