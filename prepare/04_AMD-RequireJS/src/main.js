(function () {
  //配置
  require.config({
    //基本路径
    baseUrl: 'src/',
    //映射: 模块标识名: 路径
    paths: {
      //自定义模块
      'a': 'modules/a',  // 不能加后缀
      'b': 'modules/b',
      //第三方库
      'jquery': 'libs/jquery-1.10.1',
    }
  })

  //引入模块使用
  require(['a'], function (a) {
    a.showMsg()
  })
})()