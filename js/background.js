function onClickHandler(info, tab) {
  if (info.menuItemId == "hightligh" ) {
    chrome.tabs.sendMessage(tab.id, {func:"highlight",arg:info.selectionText});
  } else if (info.menuItemId == "unHightligh") {
    chrome.tabs.sendMessage(tab.id, {func:"unHighlight",arg:info.selectionText});
  } else if (info.menuItemId == "googleSearch") {
    chrome.tabs.create({active:true,url:"http://www.google.com#q="+info.selectionText});
  } else if (info.menuItemId == "baiduSearch") {
    chrome.tabs.create({active:true,url:"http://baidu.com/s?wd="+info.selectionText});
  } else if (info.menuItemId == "youdaoSearch") {
    chrome.tabs.create({active:true,url:"http://dict.youdao.com/search?q="+info.selectionText});
  } else if (info.menuItemId == "doubanMovieSearch") {
    chrome.tabs.create({active:true,url:"http://movie.douban.com/subject_search?search_text="+info.selectionText+"&cat=1002"});
  } else if (info.menuItemId == "taobaoSearch"){
    chrome.tabs.create({active:true,url:"http://s.taobao.com/search?q="+info.selectionText});
  }else {
    alert("error in background.js");
  }
};

var hightligh = chrome.contextMenus.create({"title": "高亮选中文本", "contexts":["selection"],"id":"hightligh"});
var hightligh = chrome.contextMenus.create({"title": "清除高亮", "contexts":["all"],"id":"unHightligh"});
var googleSearch = chrome.contextMenus.create({"title": "谷歌搜索","contexts":["selection"],"id":"googleSearch"});
var googleSearch = chrome.contextMenus.create({"title": "有道搜索","contexts":["selection"],"id":"youdaoSearch"});
var googleSearch = chrome.contextMenus.create({"title": "豆瓣电影搜索","contexts":["selection"],"id":"doubanMovieSearch"});
var googleSearch = chrome.contextMenus.create({"title": "淘宝搜索","contexts":["selection"],"id":"taobaoSearch"});
var googleSearch = chrome.contextMenus.create({"title": "百度搜索","contexts":["selection"],"id":"baiduSearch"});
chrome.contextMenus.onClicked.addListener(onClickHandler);

