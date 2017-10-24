var webpack = require("webpack")

module.exports = {
    devtool:"source-map",
    entry:"./index.js",

    output:{
        filename:"bundle.js",
        path:__dirname + "/src"
    },

    module:{
        loaders:[{
            test:/\.js[x]?$/,
            exclude:/(node_modules)/,
            loader:"babel-loader"
        },{
            test:/\.css$/,
            loader:"css-loader!style-loader"
        }, {
            test: /\.scss$/,
            loader: 'style-loader!css-loader!sass-loader'
        }]
    },
    watch:true,
    devServer:{
        contentBase:"/src",
        inline:true,
        port:54321
    }
}

