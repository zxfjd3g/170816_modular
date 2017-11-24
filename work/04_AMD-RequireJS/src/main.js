(function () {
  // 配置
  require.config({ // 配置对象
    //基本路径
    baseUrl: 'src/',
    //映射: 模块标识名: 路径
    paths: {
      //自定义模块
      'a': 'modules/a',  // 不能加后缀
      'b': 'modules/b',
      'jquery': 'libs/jquery-1.10.1'
    }
  })
  // 加载模块运行
  require(['a'], function (a) {
    a()
  })
})()