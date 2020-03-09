const HtmlWebPackPlugin=require ('html-webpack-plugin');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin=require('optimize-css-assets-webpack-plugin');
module.exports={

    mode:'development',
    optimization:{
        minimizer:[new OptimizeCssAssetsWebpackPlugin()]
    },
    module: {
        rules:[
            {
                test:/\.css$/,
                exclude:/styles\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/styles\.css$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test:/\.html$/,
                use: [
                    {
                        loader:'html-loader',
                        options: {minimize:false}
                    }
                ]
            },
            {
                test:/\.(png|svg|jpg|git)$/,
                use:[
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            name: 'assests/[name].[ext]'
                        }
                    }
                ]
            },
        ]
    },
    plugins:[
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false
        }),
    ]
}