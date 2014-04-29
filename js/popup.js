function multiHighlight(){
    var input = document.getElementById("keywordText").value;
    //搜索高亮
    input = input.replace(/ /g,'');
    chrome.storage.local.set({'keywords':input});
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
    
    chrome.storage.local.remove('keywords');
    document.getElementById("keywordText").value = "";
    window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  var inp = document.getElementsByName("okBtn");
  inp[0].addEventListener('click', multiHighlight);
  inp = document.getElementsByName("clearBtn");
  inp[0].addEventListener('click', unHighlightAll);
});

chrome.storage.local.get('keywords',function(items){
        var words = items['keywords'];
        if(words != null){
            //alert("!=0"+words);
            document.getElementById("keywordText").value = words;
        }else{
          //alert("==0");
        }           
    }
);
 
  
        
           
           
