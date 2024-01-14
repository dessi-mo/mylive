var rule={
    title:'188影视',
    host:'https://hsex.icu',
	url:'/fyclass-fypage.htm',//网站的分类页面链接
	filterable:0,//是否启用分类筛选,
    searchUrl:'/search-fypage.htm?search=**&sort=new',//搜索链接 可以是完整路径或者相对路径,用于分类获取和推荐获取 **代表搜索词 fypage代表页数
    searchable:2,
    headers:{'User-Agent':'PC', },
    class_name:'全部&周榜&月榜&5分钟以上&10分钟以上',//静态分类名称拼接
    class_url:'list&top7_list&top_list&5min_list&long_list',//静态分类标识拼接
    推荐:'.col-sm-6;h5&&Text;img&&data-src;var&&Text;a&&href',
    double:false, // 推荐内容是否双层定位
    一级:'.col-sm-6;h5&&Text;img&&data-src;var&&Text;a&&href',
    二级:*,
    搜索:'.col-sm-6;h5&&Text;img&&data-src;var&&Text;a&&href',
}

