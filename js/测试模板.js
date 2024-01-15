var rule = {
    title:'小品网',
    host:'https://hsex.icu',
    url:'/fyclass-fypage.htm[/fyclass.htm]',
    searchUrl:'/search.php?q=**',
    searchable:2,
    quickSearch:0,
    filterable:0,
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
