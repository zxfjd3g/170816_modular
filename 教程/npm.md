# 1. npm常用命令
    * npm init  //初始化当前应用包, 生成package.json
    * npm install  //根据package.json下载所有依赖包
    * npm install packageName --save   //下载某个运行时依赖包
    * npm install packageName --save-dev  //下载某个开发编译期依赖包
    * npm install packageName -g  //全局下载某个依赖包
    * npm install package@version  //下载指定版本的某个依赖包
    * npm info packageName  //查看某个包有远程仓库中的相关信息
    * npm remove packageName --save  //移除已下载的运行依赖包
    * npm remove packageName –save-dev  //移除已下载的开发依赖包
    * npm list  //查看安装的所有的包
    * npm help  //查看命令的详细帮助
    * npm install -g cnpm --registry=https://registry.npm.taobao.org  //安装淘宝镜像
    * npm config set registry="https://registry.npm.taobao.org" //将淘宝镜像设置为npm的默认仓库
    * npm run xxx //执行package.json的scripts中配置的命令
    * npm root -g  //查看全局下载目录

# 2. package.json
## 1). 理解
    包含当前应用包相关信息的文件: 应用的标识 / 运行相关脚本 / 依赖
    
## 2). 结构
    {
      // 标识
      "name": "xxx",
      "version": "1.0.0",
      
      // 运行项目的相关脚本
      scripts: {
        "build": "webpack src/main.js dist/bundle.js"
      },
      
      // 运行时依赖
      dependencies: {
      
      },
      
      // 开发(编译)时依赖
      devDependencies: {
      
      }
    }
    
# 3. yarn
## 1). yarn是什么?
    facebook开源的新的包管理工具
    相对npm更快, 更安全
    
## 2). 如何使用上yarn
    npm install yarn -g
    
## 3). yarn常用命令
    * yarn init
    * yarn install
    * yarn add xxx
    * yarn add xxx@1.0.0
    * yarn add xxx --dev
    * yarn global add xxx
    * yarn info xxx
    * yarn remove xxx
    * yarn run yyy