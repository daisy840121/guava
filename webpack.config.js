var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const glob = require('glob');

const modeEnv = process.env.NODE_ENV === 'production' ? 'production' : 'development'
// TODO del
console.log(',.......', process.env.NODE_ENV)

const config = {
  //mode: development開發模式 production上線模式(壓縮後的)
  mode: modeEnv,
  // 指定所有要編譯檔案的總資料夾
  context: path.resolve(__dirname, "src"),
  entry: {
    //變數名稱:[路徑]
    main: ['main.scss', 'main.js'],
    cart: ['page/cart.js'], // cart:要放到chunk的命名 ['page/cart.js']:要引入的檔案 
    join: ['page/join.js'],
    var_prd:['page/prd.js'],
    var_city:['page/city.js'],
    var_active:['page/active.js'],
    var_certificate:['page/certificate.js'],
    var_contactus:['page/contactus.js'],
    var_faq:['page/faq.js'],
    var_cartItem:['page/cartItem.js']

  },
  output: {
    path: path.resolve(__dirname, 'dist'), //輸出根目錄
    filename: 'js/[name].js',
    //[hash] 自動產生出檔案名避免重複
  },
  devServer: {
    //沒有加devServer時npm run dev
    //會在專案底下執行 網址是 http://localhost:8080/dist/
    //加後變成指定在dist底下執行 網址是http://localhost:8080 (本地端伺服器)
    contentBase: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: false
            }
          },
          {
            loader: 'pug-html-loader',
            options: {
              pretty: true
            }
          },
        ]
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader"
        ],
      },
      {
        test: /\.(sa|sc)ss$/,
        exclude: /libs/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },
      {
        test: /\.gif/,
        type: 'asset/resource'
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            publicPath: '../'
          }
        }]
      },
      {
        test: /\.svg$/,
        exclude: /upload/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            publicPath: '../'
          }
        }]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        include: path.resolve(__dirname, '../node_modules/bootstrap-icons/font/fonts'),
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'webfonts',
            publicPath: '../webfonts',
          },
        }
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {//iconnpm install file-loader --save-dev
            loader: 'file-loader',
            options: {
              name: '[name][hash].[ext]',
              outputPath: 'fonts/',
              //name代表轉出的字型檔名稱，outputPath代表轉出的目錄名稱。
            },
          },
        ],
      },
    ],
  },
  //能產出我們自己寫的原始碼，否則你會看不懂它編譯的碼，這樣也沒辦法debug
  devtool: 'source-map',
  plugins: [
    // 全域，不需要在各個entry獨立引入jquery
    // 建議少用providePlugin
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),

    new MiniCssExtractPlugin({
      //從js抽離出來獨立成一個檔案
      filename: 'css/[name].css'
      // 'css/[name].[hash].css'
    }),

    new CopyWebpackPlugin({
      patterns: [
        { from: "assets", to: "assets" },
      ],
    }),
  ],
  resolve: {
    // entry 可以省略路徑
    // 告訴webpack 解析模塊時應該搜索的目錄。
    // 絕對路徑和相對路徑都能使用
    modules: [
      path.resolve('src'),
      path.resolve('src/js'),
      path.resolve('src/scss'),
      path.resolve('src/assets'),
      path.resolve('node_modules')
    ],
    extensions: ['.js', '.scss', '.css']
  },
  // entry 可以省略副檔名
};

//有幾個pug就產幾個html
glob.sync('src/pug/pages/*.pug').forEach((name) => {
  const start = name.indexOf('/pug/pages/') + 5;
  const end = name.length - 4;
  const n = name.slice(start, end);
  // const fn = n.slice(6, end);
  let chunks = []
  switch (n) {
    //如果你要給指定的pages/about.pug自動引入about.js檔
    // case 'pages/about':
    //   chunks = ['about']
    //   break;
    //如果你其他頁沒有指定要引入的就直接留default就好
    //將會自動引入main.js與main.css
    case 'pages/index':// 'view/index' pug檔案
      chunks = ['main', 'index'] // 要放入的檔案，回到17行'entry'設定
      break;
    case 'pages/cart':
      chunks = ['main', 'cart','var_cartItem']
      break;
    case 'pages/prd_detail'://pug檔
      chunks = ['main', 'var_prd','var_active']//參照entry變數
      break;
    case 'pages/product'://pug檔
      chunks = ['main', 'var_prd','var_active']//參照entry變數
      break;
    case 'pages/latestnews'://pug檔
      chunks = ['main', 'var_active']//參照entry變數
      break;
    case 'pages/certificate'://pug檔
      chunks = ['main', 'var_active']//參照entry變數
      break;
    case 'pages/faq'://pug檔
      chunks = ['main', 'var_active','var_faq']//參照entry變數
      break;
    case 'pages/join':
      chunks = ['main', 'join','var_city']
      break;
    case 'pages/member_info':
        chunks = ['main', 'var_city']
        break;
    case 'pages/certificate_detail':
      chunks = ['main', 'var_certificate']
      break;
    case 'pages/contact_us':
        chunks = ['main', 'var_contactus','join']
        break;    
    default:
      chunks = ['main']
      break;
  }

  //將多個pug檔編譯成html檔至dist
  config.plugins.push(
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/pug/' + n + '.pug'),
      filename: n + '.html',
      inject: true,
      hash: true,
      chunks: chunks,
      minify: {
        sortAttributes: true,
        collapseWhitespace: false,
        collapseBooleanAttributes: true,
        //要移除註解嗎？
        removeComments: false
      }
    })
  );
});

module.exports = config;