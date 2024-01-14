var rule = {
    title:'好色',//规则标题,没有实际作用,但是可以作为cms类名称依据
    编码:'',//不填就默认utf-8
    搜索编码:'',//不填则不编码，默认都是按utf-8.可优先于全局编码属性.比如网页源码编码是gbk,这里可以指定utf-8搜索独立编码。多数情况这个属性不填或者填写gbk应对特殊的网站搜索
    host:'https://hsex.icu/',//网页的域名根,包含http头如 https://www,baidu.com
    //hostJs:'print(HOST);let html=request(HOST,{headers:{"User-Agent":PC_UA}});let src = jsp.pdfh(html,"ul&&li&&a&&href");print(src);',//HOST=src.replace("/index.php",""),//网页域名根动态抓取js代码。通过HOST=赋值
    homeUrl:'/',//网站的首页链接,可以是完整路径或者相对路径,用于分类获取和推荐获取 fyclass是分类标签 fypage是页数
    url:'/fyclass-fypage.htm',//网站的分类页面链接
    detailUrl:'',//非必填,二级详情拼接链接,感觉没啥卵用
    searchUrl:'/search-fypage.htm?search=**&sort=new',//搜索链接 可以是完整路径或者相对路径,用于分类获取和推荐获取 **代表搜索词 fypage代表页数
    searchable:1,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    filterable:0,//是否启用筛选,
    

    // 注意,由于猫有配置缓存,搜索配置没法热加载，修改了js不需要重启服务器
    // 但是需要tv_box进设置里换源使配置重新装载
    headers:{//网站的请求头,完整支持所有的,常带ua和cookies
        'User-Agent':'MOBILE_UA',
        "Cookie": "searchneed=ok"
    },
    
    timeout:5000,//网站的全局请求超时,默认是3000毫秒
    
    class_name:'全部&周榜&月榜&5分钟以上&10分钟以上',//静态分类名称拼接
    class_url:'list&top7_list&top_list&5min_list&long_list',//静态分类标识拼接
    
    // 服务器解析播放
    play_parse:false,

    // 自定义免嗅 
    lazy:'',
    
    // 首页推荐显示数量
    limit:6,

    // 类似海阔一级 列表;标题;图片;描述;链接;详情 其中最后一个参数选填
    一级:'.col-sm-6;h5&&Text;img&&data-src;var&&Text;a&&href',
    
    //二级发起访问前进行js处理。解决特殊情况一级给出的链接非二级真实源码而是前端重定向链接的源码
    //二级访问前:'log(MY_URL);let jump=request(MY_URL).match(/href="(.*?)"/)[1];log(jump);MY_URL=urljoin2(MY_URL,jump)',
    // 二级可以是*,表示规则无二级,直接拿一级的链接进行嗅探
    // 二级 title: 片名;类型
    // 二级 desc: 主要信息;年代;地区;演员;导演
    // 或者 {title:'',img:'',desc:'',content:'',tabs:'',lists:'',tab_text:'body&&Text',list_text:'body&&Text',list_url:'a&&href'} 同海阔dr二级
    二级:'*',
    // 搜索可以是*,集成一级，或者跟一级一样的写法 列表;标题;图片;描述;链接;详情
    搜索:'*',
    // 本地代理规则，可用于修改m3u8文件文本去广告后返回代理文件地址，也可以代理加密图片
    proxy_rule:`js:
    log(input);
    input = [200,'text;plain','hello drpy']
    `,
    //是否启用辅助嗅探: 1,0
    sniffer:1,
    // 辅助嗅探规则
    isVideo:"http((?!http).){26,}\\.(m3u8|mp4|flv|avi|mkv|wmv|mpg|mpeg|mov|ts|3gp|rm|rmvb|asf|m4a|mp3|wma)",
    // 辅助嗅探规则js写法
    isVideo:`js:
    log(input);
    if(/m3u8/.test(input)){
    input = true
    }else{
    input = false
    }
    `,
}
