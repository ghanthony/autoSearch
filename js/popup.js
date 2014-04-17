function multiHighlight(){
    var input = document.getElementById("keywordText").value;
    //搜索高亮
    input = input.replace(/ /g,'');
    //if(input=='')
    //   return;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {func:"multiHighlight",arg: input}, function(response) {
        if(response.msg=="ok")
            return;
        else if(response.msg=="clear")
            return;
        else if(response.msg=="tooMuch")
            alert("最多三个关键字");
      });
    });
      
    window.close();
}

function unHighlightAll(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {func:"unHighlightAll"});
    });
    window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  var inp = document.getElementsByName("okBtn");
  inp[0].addEventListener('click', multiHighlight);
  inp = document.getElementsByName("clearBtn");
  inp[0].addEventListener('click', unHighlightAll);
});

           
           
           
           
