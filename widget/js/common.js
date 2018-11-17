var apis = "http://101.200.58.8/index.php/index/";
var iapi = "http://101.200.58.8";
var api_init;
var apiready = function() {
    //  var sType = api.systemType;
    //  var sVer = api.systemVersion;
    //  console.log(sVer)
    //  if(sType=='android'){   //如果安卓版本 修改状态栏为白色
    //    api.setStatusBarStyle({
    //        style: 'dark',
    //        color: 'rgba(255,255,255,1)'
    //      });
    //     if(sVer > '7.0'){
    //       // $('header').css('padding-top',api.safeArea.top + 'px')
    //       // $('body').addClass('header_and')
    //     }
    //  }else if(sType=='ios'){ //如果ios版本 修改状态栏字体为黑色
    //    api.setStatusBarStyle({
    //        style: 'dark',
    //        color: '#cccccc'
    //      });
    //  }
    var systemType = api.systemType; // 获取手机类型，比如： ios
    var header = document.querySelector('header');
    var statusBarAppearance = api.statusBarAppearance;
    if (systemType == 'ios') { //兼容ios和安卓
        if (statusBarAppearance) {
            $api.addCls(header, 'headerIos');
        }
    } else {
        if (statusBarAppearance) {
            $api.addCls(header, 'headerAnd');
        }

    }

    // api.setStatusBarStyle({
    //   color: '#0063ff',//设置APP状态栏背景色
    //   style: 'light'
    // });


    $(".newact").on("click", function() { //不用判断登录class
        var url = $(this).attr("url");
        console.log(url);
        if (!url) {
            return;
        }
        api.openWin({
            name: url,
            url: url,
            opaque: false
        });
    })
    $(".event_back").on('click', function() { //公共返回事件
        api.closeWin();
    });
    //全局点击事件
    $(".newactlogin").on("touchstart", function() { //判断登录class   比如:'<div class="newactlogin" url="你要跳转的路径">'
        if (!check_login()) {
            return false;
        }
        var url = $(this).attr("url");
        if (!url) {
            return false;
        }
        api.openWin({
            name: url,
            url: url
        });
    })


    api_init();
}
// $(".event_back").on('click', function() { //公共返回事件
//     api.closeWin();
// });
function check_login() { //没有登录跳转登录页面
    var userId = $api.getStorage("userId");

    if (!userId) {
        api.openWin({
            name: 'login',
            url: '../public/login.html',
        });
        return false;
    }
    return true;
}
function show_tankuang(title,text) {
  api.showProgress({
    title: title,
    text: text,
    modal: false
});
}
function header_top() {
    // var systemType = api.systemType;  // 获取手机类型，比如： ios
    //   var header = document.querySelector('header');
    //   if(systemType=='ios'){//兼容ios和安卓
    //     $api.addCls(header, 'headerIos');
    //   }else{
    //     $api.addCls(header, 'headerAnd');
    //   }
    //
}
