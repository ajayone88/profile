const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const mode = process.env.MODE;
module.exports = {
    entry:['./src/index.js', './src/index.scss'],
    output:{
        filename:"./js/[name]-bundle.js",
        path:path.resolve(__dirname, '../dist'),
        publicPath:"/"
    },
    devServer:{
        contentBase:'dist',
        overlay:true
    },
    mode:mode,
    module:{
        rules:[
            {
                test:/\.js$/,
                use:[
                    {
                        loader:"babel-loader"
                    }
                ],
                exclude:/node_modules/
            },
            {
                test:/\.scss$/,
                use:[
                    {
                        loader: mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    },
                    {
                        loader:"css-loader"
                    },
                    {
                        loader:"postcss-loader",
                        options:{
                            path:'./config/'
                        }
                    },
                    {
                        loader:"sass-loader"
                    }
                ]
            },
            {
                test:/\.html$/,
                use:[
                    {
                        loader:"html-loader",
                        options:{
                            attributes:{
                                list:[
                                   {
                                    tag:'img',
                                    type:"src",
                                    attribute:'src'
                                   }
                                ]
                            }
                        }
                    }
                ]
            },
            {
                test:/\.(png|jpg)$/,
                use:[
                    {
                        loader:'file-loader',
                        options:{
                            name:'./images/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test:/\.svg$/,
                use:[
                    {
                        loader:"svg-url-loader",
                        options:{
                            name:'./images/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/index.html",
            filename:"index.html"
        }),
        new MiniCssExtractPlugin({
            filename:'./css/index.css'
        }),
        new CleanWebpackPlugin()
    ]
}