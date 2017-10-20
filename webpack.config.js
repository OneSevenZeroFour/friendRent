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
            loader:"style-loader!css-loader"
        }
        ]
    },
    watch:true,
    devServer:{
        contentBase:"/public",
        inline:true,
        port:54321
    }
}

