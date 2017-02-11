var path=require('path')
var webpack=require('webpack')

module.exports={
  devtool:'cheap-module-eval-source-map',
  entry:{
    app:[
      './src/js/app'
    ]
  },
  output:{
    //publicPath:'/dist/',
    path:'./dist',
    filename:'[name].js'
  },

  module:{
    loaders:[{
      test:/\.js?$/,
      include:[
        path.resolve(__dirname,'src')
      ],
      loader:'babel-loader'
    },{
      test:/\.scss$/,
      include:[
        path.resolve(__dirname,'src')
      ],
      loader:'style-loader!css-loader!sass-loader?sourceMap=true&sourceMapContents=true'
    },{
      test: /\.(png|jpe?g|gif|svg)$/,
      loader: 'url-loader',
      query: {
        limit: 10240, // 10KB 以下使用 base64
        name: 'dist/img/[name]-[hash:6].[ext]'
      }
    }]
  },

  resolve:{
    extensions:['.js','.css','.scss']
  },

  /*babel:{
    presets:['es2015'],
    plugins:['transform-runtime']
  },*/

  plugins:[
    //new webpack.optimize.CommonsChunkPlugin({name:'vendors',filename:'vendors.js'}),
    /*new webpack.DefinePlugin({
      'process.env.NODE_ENV':JSON.stringify(process.env.NODE_ENV),
      __DEV__:true
    }),*/
    //new webpack.NoEmitOnErrorsPlugin(),
    //new webpack.HotModuleReplacementPlugin()
  ]
}
