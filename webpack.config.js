const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');//导入 在页面中自动生成html页面的插件
//创建一个插件的实例对象
const htmlPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, './src/index.html'),//源文件
    filename: 'index.html'//生成内存中首页的名称
});

// 向外暴露一个打包的配置对象（node语法）  webpack是基于Node构建的，说以wenpack支持所有的Node Api we和语法
module.exports = {
    mode: 'development',
    plugins: [
        htmlPlugin
    ],
    module:{//所有第三方模块的匹配规则
        rules:[//第三方匹配规则
           {test:/\.js|jsx$/,use:'babel-loader',exclude:/node_modules/},
        ]
    }
};