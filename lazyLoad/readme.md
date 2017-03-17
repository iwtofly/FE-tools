## lazyLoad简单实现
此处利用了Flicker提供的JSONP接口获取图片，可通过搜索框输入想要搜索的内容搜索相应的图片。
首次只显示三张（具体显示几张可以根据你的设备去做判断来实现），之后的img src根据onscroll事件的判定结果动态添加，当所有图片均呈现完毕后，取消事件监听。
观察开发者工具network一栏，可以看到图片动态获取过程。
Demo示例: http://iwtofly.cn/demos/lazyLoad/index.html
