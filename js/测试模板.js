var rule = {
    title:'小品网',
    host:'https://hsex.icu',
    url:'/fyclass-fypage.htm',
    searchUrl:'/search.php?q=**',
    searchable:2,
    quickSearch:0,
    filterable:0,
    headers:{
        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36',
        'cookie':'hid=rjeutkdurseo1ho0ilb8vdph4m; _ga=GA1.1.590549445.1705249558; _ga_ECF2QFGQ9G=deleted; _ga_ECF2QFGQ9G=GS1.1.1705249995.1.0.1705249995.0.0.0; cf_clearance=MCQKUdwYCgx95MsxlPa8zcET9dsyD3bNuBrP0zjzv_U-1705249996-0-2-27068432.1417c96.7007dbd2-0.2.1705249996'
    },
    timeout:5000,
    class_name:'全部&周榜&月榜&5分钟以上&10分钟以上',//静态分类名称拼接
    class_url:'list&top7_list&top_list&5min_list&long_list',//静态分类标识拼接
    play_parse:true,
    lazy:'',
    limit:6,
    double:true,
    推荐:'.col-sm-6;h5&&Text;img&&data-src;var&&Text;a&&href',
    一级:'.col-sm-6;h5&&Text;img&&data-src;var&&Text;a&&href',
    二级:'*',
    搜索:'*',
}
